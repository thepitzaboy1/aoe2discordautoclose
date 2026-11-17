// Notify the background worker immediately, before the external protocol launch.
chrome.runtime.sendMessage({ action: 'scheduleAoE2Close' }).catch(console.warn);
