# AoE2 Discord Auto-Close

A lightweight Microsoft Edge / Google Chrome extension that automatically closes the Age of Empires II Join / Spectate redirect tabs opened by Discord after 10 seconds. No Tampermonkey required.

## Download and install

1. [Download the extension ZIP](https://github.com/thepitzaboy1/aoe2discordautoclose/archive/refs/heads/main.zip).
2. Extract the ZIP to a permanent folder.
3. Open `edge://extensions/` in Edge or `chrome://extensions/` in Chrome.
4. Enable **Developer mode**, then click **Load unpacked**.
5. Select the folder that directly contains `manifest.json`. Do not select the ZIP or a parent folder.
6. Confirm **AoE2 Redirect Auto Close** is enabled. Disable the old AoE2 Tampermonkey script if installed.

The selected folder should contain these files directly:

```text
aoe2discordautoclose-main/
  manifest.json
  background.js
  redirect.js
  README.md
```

## Test

Click Join or Spectate in the AoE2 Discord bot. Approve the external game-launch prompt promptly if shown. The redirect tab should close automatically after 10 seconds.

## Troubleshooting

- **Manifest file is missing or unreadable:** select the folder directly containing manifest.json.
- **Tab stays open:** confirm the extension is enabled in the browser and profile Discord launches.
- **Need more time?** Change `10000` in redirect.js (milliseconds), then reload the extension on the Extensions page.

## How it works

The extension targets only `https://palladrium.github.io/AoE2-join-redirect/*`. It uses the browser's tab-management API rather than relying on the webpage's window.close() permission. It checks the tab URL before closing it. The timer does not verify that the game successfully launched.

This is an unofficial community utility.
