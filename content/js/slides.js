import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";
import PdfEmbed from "./components/PdfEmbed/index.js";

let current_document = window.location.href;
let last_slash = current_document.lastIndexOf("/");

let slide_path = "";
if (last_slash == current_document.length - 1) {
  slide_path = current_document + "slides.pdf";
} else {
  slide_path = current_document.substring(0, last_slash) + "/slides.pdf";
}

fetch(slide_path, { method: "HEAD" })
  .then((response) => {
    return response.status;
  })
  .then((st) => {
    if (st == 200) {
      let container = document.createElement("div");

      render(
        html`
          <div style="text-align: center;" class="no-print">
            <${PdfEmbed} src=${slide_path} />
          </div>
        `,
        container
      );

      document.querySelector("h1").insertAdjacentElement("afterend", container);
    }
  });
