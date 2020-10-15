---
title: Pulse Games FAQ
date: 2020-10-13
author: Stasi Vladimirov
description: Frequently Asked Questions for the Pulse Games platform
keywords: Pulse Games, FAQ, Q&A, questions, how-to, documentation, information, board games
---

<style>
  h1, h2, h3, h4 {
    margin-top: -40px;
    padding-top: 60px;
  }

  h2 {
    margin-bottom: 20px;
  }
</style>

# Frequently Asked Questions

## [#](faq.html#the-platform)The platform

#### [#](faq.html#what-is-pulse-games)What is Pulse Games?

Great question. It's an online platform for board games.
It's focused on 2 player competitive games.
Our goal is to offer variety of games available free of charge.
We strive to make the games cross platform and mobile friendly.

#### [#](faq.html#what-games-are-available)What games are available?

We are launching with **Schotten Totten 2** by Reiner Knizia and plan to add a few more titles very soon.
If there is a game you would love to see implemented here please [contact us](contact/index.html)

## [#](faq.html#the-pulse-games-team)The Pulse Games Team

#### [#](faq.html#who-created-this-and-why)Who created this and why?

The app and the website were initially built by Cmacu and Will.
The [Pulse Games App](play/index.html) was created to enable real-time competitive gaming.
The goal was to match similar-skilled opponents, and to rank the players on a season-based leaderboard.
Check this [blog article](01-hello-pulse.html) to learn more about the inspiration that started this project.

#### [#](faq.html#how-much-does-it-cost)How much does it cost?

It's completely free to play in the Pulse Games league. No strings attached. No ads either!

#### [#](faq.html#how-can-i-help)How can I help?

The best thing you can do to support us and enable more competition is to share Pulse Games with your friends (and opponents). Thank you!

#### [#](faq.html#where-can-i-send-questions-and-feedback)Where can I send questions and feedback?

Feel free to [contact us](contact.html).

## [#](faq.html#the-profile)The profile

#### [#](faq.html#how-can-i-access-the-pulse-games-app)How can I access the Pulse Games app?

Pulse Games doesn't require a separate password.
Access to the platform is granted through your CGE online account.
[Open the Pulse Games App](play/index.html) to get started.
If you have any trouble with access, please [contact us](contact.html).

## [#](faq.html#the-matchmaker)The Matchmaker

#### [#](faq.html#what-is-a-matchmaker)What is a Matchmaker?

The **Pulse Matchmaker** is the algorithm that matches players who press the 'Find Match' button.
It's made of a pool of players and their details, such as rating, and recent opponents.

#### [#](faq.html#how-does-it-work)How does it work?

When a **player** clicks on 'Find Match', he is added to the pool of other players looking for a **match**.
Shortly afterward, an **algorithm** compares the skill and wait time of all players in the pool.
Based on the results, players are group together and each group is given a **score**.
If the score is under a specific threshold, the players are **matched** and notified.
Finally the game is created. Click on the link to play.

#### [#](faq.html#how-do-i-use-it)How do I use it?

After login, click on 'Find Match' to run the Matchmaker.

#### [#](faq.html#what-happens-after-a-match-is-found)What happens after a match is found?

After a **match** is found, the Matchmaker calls an API service to create a game and provides a link to open the game.

#### [#](faq.html#what-happens-if-no-match-is-found)What happens if no match is found?

Every time a player clicks 'Find Match', a timer is started while looking for an opponent.
If the timer runs out, the player needs to click on 'Find Match' again to rejoin the queue.

#### [#](faq.html#what-to-do-after-the-match-is-complete)What to do after the match is complete?

After the game in the official app is complete, open the Pulse Games app again, if asked click on the Complete Match button.
This evaluates the match results, and rewards you for your victory (or defeat).

## [#](faq.html#special-rules)Special rules

#### [#](faq.html#what-happens-if-i-time-out-or-abandon-the-game)What happens if I timeout or abandon the game?

Timeout and abandon result in an automatic match loss for the player who timed out.
Timeouts are also recorded in your player profile.
A high amount of abandon/timeout may result in a temporary account suspension or ban.
The goal is to ensure great experience for all players.

#### [#](faq.html#what-if-my-opponent-times-out-or-abandons-the-game)What if my opponent times out or abandons the game?

If the opponent abandons the game, or runs out of time, you don't need to complete the game.
Just be sure to press "Complete Match" in the Pulse app before you act further.
Pulse Games will declare you the winner, and then you can resign or continue the game against the AI, whichever your prefer.

#### [#](faq.html#how-long-after-the-match-is-complete-do-i-have-to-report-it)How long after the match is complete do I have to report it?

You (or your opponent) should request the match completion within 1 week after the game is completed.
After that, we can't guarantee that the results will still be available.

#### [#](faq.html#what-happens-if-i-resign)What happens if I resign?

Resignation is automatically counted as loss for the resigning player.

## [#](faq.html#ranking)Ranking and Leaderboard

#### [#](faq.html#what-is-my-division)What is my division?

Pulse Games offers four divisions: Bronze, Silver, Gold, and Master. Winning matches in each division helps to advance to the higher divisions.

#### [#](faq.html#what-is-my-level)What is my level?

Each Pulse Games division (except Master) has four levels: A, 1, 2, and 3. When you advance past the highest level, you instead promote to the next division.

#### [#](faq.html#how-do-i-advance)How do I advance?

Each division has different advancement rules:

- Bronze Division: Win gains 2 levels, Loss gains 1 level
- Silver Division: Win gains 1 level, Loss has no effect
- Gold Division: Win gains 1 level, Loss loses 1 level
- Master Division: An Elo-style rating determines your rank on the leaderboard

#### [#](faq.html#what-is-the-leaderboard)What is the leaderboard?

Pulse Games tracks each player's internal rating inside the matchmaker. The leaderboard ranks all Master Division players by their rating, and others by their division and level.

#### [#](faq.html#why-do-you-have-seasons)Why do you have seasons?

Dividing the league into seasons allows us to celebrate the season winner. Also, at the start of each season, divisions and ratings are reset, so everyone has a fresh shot at the top position on the leaderboard.

#### [#](faq.html#is-there-an-all-time-leaderboard)Is there an all-time leaderboard?

Stay tuned!

#### [#](faq.html#do-games-i-play-on-the-app-without-matchmaker-count)Do games I play on the app without matchmaker count?

Only games created through the Pulse Games matchmaker are counted toward the league results.

#### [#](faq.html#can-i-play-ranked-matches-with-my-friends)Can I play ranked matches with my friends?

If you get matched against your friend, your game will be ranked, but you cannot control the selection of your opponent.

## [#](faq.html#past-matches)Past Matches

#### [#](faq.html#where-can-i-see-my-past-matches)Where can I see my past matches?

Hit "Profile" inside the [Pulse Games app](play/index.html) to view your match history.

#### [#](faq.html#where-can-i-see-games-i-played-vs-another-player)Where can I see games I played vs another player?

Your matches against another player are shown when you visit their profile.

## [#](faq.html#the-settings)About the settings

#### [#](faq.html#where-are-the-settings)Where are the settings?

Settings allow you to customize your experience within the Pulse Games app.

#### [#](faq.html#what-is-timeout-and-how-does-it-work)What is the matchmaker timeout, and how does it work?

When you seek for a Pulse Games match, a timer starts counting down. If this reaches zero, your seek will automatically stop. Simply hit "Find Match" again to restart the seek.
