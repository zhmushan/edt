import * as dialog from "tauri/api/dialog";
import * as fs from "tauri/api/fs";

import { createApp } from "vue";
import App from "./App.vue";

import "./index.scss";

dialog.open().then((filepath) => {
  if (typeof filepath === "string") {
    fs.readTextFile(filepath).then((fileText) => {
      createApp(App, {
        fileText,
        filepath,
      })
        .mount("#app");
    });
  }
});
