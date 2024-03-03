/**
 * O arquivo popup é o conteúdo exibido ao abrir a extensão
 * Para mais informações: https://developer.chrome.com/extensions/background_pages
 */

import { createRoot } from "react-dom/client";
import { App } from "./app/index";

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
