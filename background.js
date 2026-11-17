chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action !== 'closeAoE2Redirect' || sender.tab?.id == null || sender.frameId !== 0) return;
  const prefix = 'https://palladrium.github.io/AoE2-join-redirect/';
  if (!sender.url?.startsWith(prefix)) return;
  chrome.tabs.get(sender.tab.id).then(tab => {
    if (tab.url?.startsWith(prefix)) return chrome.tabs.remove(tab.id);
  }).catch(console.error);
});
