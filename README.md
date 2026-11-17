# AoE2 Discord Auto-Close

A small Edge / Chrome extension that closes AoE2 Join / Spectate redirect tabs after 10 seconds. No Tampermonkey required.

## Installation or update

1. [Download the latest ZIP](https://github.com/thepitzaboy1/aoe2discordautoclose/archive/refs/heads/main.zip).
2. Extract it to a permanent folder.
3. Open `edge://extensions/` or `chrome://extensions/`.
4. Remove or disable any older copy of the extension and disable the AoE2 Tampermonkey script.
5. Enable Developer mode, click **Load unpacked**, and select the folder directly containing `manifest.json`.
6. Verify that version **1.1.0** is enabled.

## Test

Click Join or Spectate directly in Discord. Approve any external game-launch prompt promptly. The redirect tab should close after approximately 10 seconds.

## Troubleshooting

- Manifest missing: select the folder directly containing manifest.json, not the ZIP or its parent.
- Tab remains open: verify Discord uses the same browser/profile where the extension is enabled. Check that site access is allowed for palladrium.github.io.
- In the extensions page, click the extension's **service worker** inspection link. Look for “AoE2 auto-close scheduled” and “AoE2 redirect closed” in Console.
- To change the delay, edit DELAY in background.js and reload the extension.

## How it works

Version 1.1 detects redirect tabs using browser tab events and also receives an immediate message from a content script. The timer runs in the extension background worker, not the redirect page. It rechecks the exact origin, path and join/spectate fragment before closing. Host access is limited to palladrium.github.io; other pages are not closed. No data is transmitted by this extension.

The timer does not verify successful game launch. If you need the retry link or more time for a prompt, disable the extension or increase the delay. This is an unofficial community utility.
