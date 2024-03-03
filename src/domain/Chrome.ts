export type Message<Type, Payload> = {
  type: Type;
  payload: Payload;
};

type Callback<Type, Payload> = (request: Message<Type, Payload>) => void;

function sendMessage<Type = string, Payload = unknown>(
  message: Message<Type, Payload>
) {
  chrome.runtime.sendMessage(message);
}

function sendMessageToTab<Type = string, Payload = unknown>(
  tabId: number,
  message: Message<Type, Payload>
) {
  chrome.tabs.sendMessage(tabId, message);
}

function listen<Type = string, Payload = unknown>(
  callback: Callback<Type, Payload>
) {
  const listener: Parameters<typeof chrome.runtime.onMessage.addListener>[0] = (
    request,
    _,
    sendResponse
  ) => {
    callback(request);
    sendResponse({});
  };

  chrome.runtime.onMessage.addListener(listener);

  return () => chrome.runtime.onMessage.removeListener(listener);
}

type Tab = chrome.tabs.Tab;

function getCurrentTab() {
  return new Promise<Tab>((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) =>
      resolve(tabs[0])
    );
  });
}

function openNewTab(url: string) {
  chrome.tabs.create({ url });
}

function setupContentScript() {
  chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const activeTabId = tabs[0].id!;
    return chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      files: ["contentScript.js"],
    })
  }).catch(() => {});
}

export default {
  sendMessage,
  listen,
  sendMessageToTab,
  getCurrentTab,
  openNewTab,
  setupContentScript
};
