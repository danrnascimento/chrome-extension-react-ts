import { useEffect, useState } from "react";
import Chrome from "src/domain/Chrome";

export function App() {
  const [pageTitle, updateTitle] = useState("");

  useEffect(() => {
    Chrome.listen((message) => {
      if(message.type === "getPageTitleResult"){
        updateTitle(message.payload as string);
      }
    });

    Chrome.getCurrentTab().then((tab) => {
      Chrome.sendMessageToTab(tab.id!, {type: "getPageTitle", payload: undefined});
    })

  }, []);

  return (
    <div>
      <h1>Extensão</h1>
      <p>{pageTitle}</p>
    </div>
  );
}
