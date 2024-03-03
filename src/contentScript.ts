/**
 * O arquivo Content script vai ser executado no contexto da página
 * Com o content script podemos manipular as o DOM da página em uso.
 *
 * Também podemos utilizar para passar as informações para a extensão.
 *
 * Para executar o content_script é necessário adicionar o caminho
 * no arquivo manifest.json na propriedade content_scripts
 *
 * Para mais informações: https://developer.chrome.com/extensions/content_scripts
 */

import Chrome from "./domain/Chrome";

Chrome.listen((message) => {
  console.log(">>>>>>>", message)
  if(message.type === "getPageTitle") {
    Chrome.sendMessage({ type: "getPageTitleResult", payload: document.title })
  }
})