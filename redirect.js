setTimeout(() => {
  chrome.runtime.sendMessage({ action: 'closeAoE2Redirect' }).catch(console.error);
}, 10000);
