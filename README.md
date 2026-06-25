# Mini Royale Discord Bot

Discord.js bot for organizing Fortnite/Mini Royale-style custom lobbies and competitive queues inside a Discord server. The bot tracks lobby signups, formats match announcements, and supports queue flows for different game formats.

## Features

- Battle royale lobby queue.
- 2v2 lobby queue.
- 1v1 lobby queue.
- Discord embed messages for queue status and completed lobbies.
- Simple command-prefix interface.
- Admin-style custom embed command.

## Commands

```text
b.br       Join a battle royale queue
b.2        Join a 2v2 queue
b.1        Join a 1v1 queue
b.say      Create a custom embed message, permission-gated
```

## Setup

```bash
npm install
node index.js
```

## Important Security Note

Bot tokens should never be hard-coded in source control. For any active bot, revoke old tokens in the Discord Developer Portal and load the active token from an environment variable:

```bash
export DISCORD_TOKEN="your-token"
```

Then read it in code using:

```js
const token = process.env.DISCORD_TOKEN;
```

## Status

Early Discord bot project focused on queues, embeds, command handling, and simple server automation with `discord.js`.
