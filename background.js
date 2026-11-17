const DELAY = 10000;
const pending = new Map();

function isRedirect(url) {
  try {
    const u = new URL(url);
    return u.origin === 'https://palladrium.github.io' &&
      u.pathname === '/AoE2-join-redirect/' &&
      /^#[01]\/\d{5,12}$/.test(u.hash);
  } catch { return false; }
}

function cancel(id) {
  if (pending.has(id)) clearTimeout(pending.get(id));
  pending.delete(id);
}

function schedule(id, url) {
  if (!Number.isInteger(id) || !isRedirect(url) || pending.has(id)) return;
  console.info('AoE2 auto-close scheduled', id);
  pending.set(id, setTimeout(async () => {
    pending.delete(id);
    try {
      const tab = await chrome.tabs.get(id);
      if (isRedirect(tab.url) && (!tab.pendingUrl || isRedirect(tab.pendingUrl))) {
        await chrome.tabs.remove(id);
        console.info('AoE2 redirect closed', id);
      }
    } catch (err) { console.warn('AoE2 auto-close:', err); }
  }, DELAY));
}

chrome.tabs.onUpdated.addListener((id, change, tab) => {
  if (change.url && !isRedirect(change.url)) { cancel(id); return; }
  if (change.url || change.status === 'complete') schedule(id, tab.url || change.url);
});
chrome.tabs.onRemoved.addListener(cancel);

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.action !== 'scheduleAoE2Close' || sender.frameId !== 0 || !isRedirect(sender.url)) return;
  schedule(sender.tab?.id, sender.url);
  respond({ ok: true });
});
