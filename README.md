# Pulse Games website [open](pulsegames.io)

## About

The repository contains a basic system for generating static webpages from markdown (.md) files.
The webpages are divided in 2 categories: pages (/pages) and posts (/posts)
The repository also contains all assets (icons, fonts, etc) and images necessary for the site to operate.
The static website is located in the /dist folder

## Requirements

- Node.js and npm: [install](https://nodejs.org/en/download/)

## Quick Start

- Install the dependencies

```bash
npm run install
```

## Edit/create blog posts

1. create new file in the **/posts** directory
2. name the file as the url path where the post will be located (for example: my-blog-post.md)
3. add the page details to the top of the file:

```
---
title: <Blog Post Title>
date: 2020-06-23
author: Your name
description: Pulse Games Platform
keywords: Board Games, Leaderboard, Matchmaking, Ranking, Best Players
image: images/MyImage.png
---
```

> Note: the date is updated automatically on save

4. add the markdown content [cheatsheet](https://www.markdownguide.org/cheat-sheet/)

## Adding images

Place your images in the **/dist/images** directory

## Edit pages

1. Find the corresponding markdown file in the **/pages** folder
2. Edit the content of the file

## Edit the template

The template is located in the **/src/template.ts** file. All external references should be added to the assets in the **/dist** folder

## Build the website

```bash
npm run run
```

This will compile typescript and create the webapges and the posts in the **/dist** folder.

## View the website

Open **/dist/index.html** in your browser. No server needed.

## Deploy the website

```bash
npm run deploy
```

For security reasons the deploy.sh file is not part of the repository. Build your own or contact administrator for deployment
