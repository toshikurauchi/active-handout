import { html } from "https://unpkg.com/htm/preact/index.mjs?module";

export default function PdfEmbed({ src, width, height }) {
  return html`
    <embed src=${src} type="application/pdf" width=${width} height=${height} />
  `;
}

PdfEmbed.defaultProps = {
  width: 600,
  height: 375,
};
