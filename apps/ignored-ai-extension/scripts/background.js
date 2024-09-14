// import { sendDataToBackend } from './utils';

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: 'http://localhost:3000/signin?extension=true' });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("addListener called");
  if (message.accessToken) {
    console.log("Received Access Token:", message.accessToken);

    chrome.storage.local.set({ accessToken: message.accessToken }, () => {
      console.log("Access token stored.");
    });
  }
});

const PERIODIC_INTERVAL = 5 * 60 * 1000; // 5 minutes

chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    collectAndSendData();
  }, PERIODIC_INTERVAL);
});

chrome.tabs.onCreated.addListener(() => {
  collectAndSendData();
});

chrome.tabs.onRemoved.addListener(() => {
  collectAndSendData();
});

chrome.windows.onCreated.addListener(() => {
  collectAndSendData();
});

chrome.windows.onRemoved.addListener(() => {
  collectAndSendData();
});

chrome.tabGroups.onCreated.addListener(() => {
  collectAndSendData();
});

chrome.tabGroups.onRemoved.addListener(() => {
  collectAndSendData();
});

function collectAndSendData() {
  chrome.windows.getAll({ populate: true }, (windows) => {
    const data = windows.map((window) => ({
      id: window.id,
      tabs: window.tabs.map((tab) => ({
        id: tab.id,
        url: tab.url,
        title: tab.title,
        groupId: tab.groupId
      })),
      tabGroups: window.tabGroups || []
    }));

    // sendDataToBackend(data);
  });
}
