/**
 * O arquivo background é um Service Worker que
 * podemos utilizar para comunicar com o popup ou content scripts
 *
 * Para registrar o background é necessário adicionar o caminho
 * no arquivo manifest.json na propriedade background.service_worker
 *
 * Para mais informações: https://developer.chrome.com/extensions/background_pages
 */

// import Chrome from "./domain/Chrome";

chrome.tabs
  .query({ active: true, currentWindow: true })
  .then(function (tabs) {
    const activeTab = tabs[0];
    const activeTabId = activeTab.id!;

    return chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      files: ["contentScript.js"],
    });
  })
  .catch(function () {});