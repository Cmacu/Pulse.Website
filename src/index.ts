import * as fs from 'fs'
import matter from './matter'
import marked from './marked'
import { minify } from 'html-minifier'
import template from './template'

const project: ProjectData = require('../package.json')

const styleFile = fs.readFileSync(project.styleCss)
project.styleCss = styleFile.toString()
const scriptFile = fs.readFileSync(project.scriptJs)
project.scriptJs = scriptFile.toString()

const postsReleaseTime = new Date()

export interface MarkdownData {
  title: string
  description: string
  keywords: string
  body: string
  path: string
  date?: Date
  author?: string
  image?: string
  canonical?: string
}
export interface ProjectData {
  name: string
  project: string
  icon: string
  version: string
  pagesDir: string
  postsDir: string
  outputDir: string
  styleCss: string
  scriptJs: string
}

interface ArticleData {
  href: string
  title: string
  image: string
  author: string
  date: Date
  description: string
}

const getMarkdown = (dir: string, page: string): MarkdownData => {
  const file = fs.readFileSync(`${dir}/${page}`)
  const content = matter(file)
  const body = marked(content.content)
  return {
    title: content.data.title || '',
    description: content.data.description || '',
    keywords: content.data.keywords || '',
    date: content.data.date || new Date(),
    author: content.data.author || '',
    image: content.data.image || '',
    canonical: content.data.canonical
      ? `<link rel="canonical" href="${content.data.canonical}">`
      : '',
    body,
    path: page.slice(0, -3),
  }
}

const createPage = (markdown: MarkdownData) => {
  fs.writeFile(
    `${project.outputDir}/${markdown.path}.html`,
    minify(template(project, markdown), {
      collapseWhitespace: true,
      html5: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
    }),
    (e) => {
      if (e) throw e
      console.log(`${markdown.path}.html was created successfully`)
    },
  )
}

const formatDate = (date: Date): string => date.toDateString().substr(4)
const formatDateISO = (date: Date): string => date.toISOString().split('T')[0]
// `${date.getFullYear()}-${date.getUTCMonth()}-${date.getDate()}`

const createBlogBody = (articles: ArticleData[]): string => {
  const articleList = articles
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map(
      (article) => `
    <section>
      <h2><a href="${article.href}">${article.title}</a></h2>
      <div>
        <span>by</span>
        <strong>${article.author}</strong>
        <span>${formatDate(article.date)}</span>
      </div>
      <br />
    <a href="${article.href}"><img src="${article.image}" alt="${
        article.title
      }"></a>
      <p>${article.description} <a href="${article.href}">Read more...</a></p>
    </section>
  `,
    )
  return '<h1>Pulse <strong>Games</strong> Blog</h1>' + articleList.join('')
}

const sitemapLinks: string[] = []

const createSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapLinks.join('')}
</urlset>`
  fs.writeFile(
    `${project.outputDir}/sitemap.xml`,
    sitemap.replace(/\n\s*\n/g, '\n'),
    (e) => {
      if (e) throw e
      console.log(`sitemap.xml was created successfully`)
    },
  )
}

const addSitemapLink = (
  markdown: MarkdownData,
  priority = 0.8,
  changefreq = 'monthly',
) => {
  sitemapLinks.push(`
  <url>
    <loc>https://pulsegames.io/${markdown.path}.html</loc>
    <lastmod>${formatDateISO(
      markdown.date ? markdown.date : new Date(),
    )}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  `)
}

// Pages

const pagesDir = project.pagesDir
const pages = fs.readdirSync(pagesDir)
pages.forEach((page) => {
  const markdown = getMarkdown(pagesDir, page)
  createPage(markdown)
  if (markdown.date >= postsReleaseTime) {
    return
  }
  addSitemapLink(markdown)
})

// Posts

const postsDir = project.postsDir
const posts = fs.readdirSync(postsDir)
const articles: ArticleData[] = []
posts
  // .sort()
  .reverse()
  .forEach((post) => {
    const markdown = getMarkdown(postsDir, post)
    const body = markdown.body
    const poss = body.indexOf('</h1>') + 5
    const postDetails = `<div style="text-center">by <strong>${
      markdown.author
    }</strong> ${formatDate(markdown.date)}</div>`
    markdown.body = [body.slice(0, poss), postDetails, body.slice(poss)].join(
      '',
    )
    // markdown.body =
    createPage(markdown)
    if (markdown.date >= postsReleaseTime) {
      return
    }
    articles.push({
      href: `${markdown.path}.html`,
      title: markdown.title,
      image: markdown.image,
      date: markdown.date,
      author: markdown.author,
      description: markdown.description,
    })
    addSitemapLink(markdown)
  })

const blogPageMarkdown: MarkdownData = {
  title: 'Blog',
  description: 'Pulse Games Blog Articles',
  keywords: 'Pulse Games, blog, articles, stories, information, how-to',
  body: createBlogBody(articles),
  path: 'blog',
}

createPage(blogPageMarkdown)

addSitemapLink(blogPageMarkdown, 1, 'weekly')

createSitemap()
console.log(`${sitemapLinks.length} pages added to the sitemap`)
