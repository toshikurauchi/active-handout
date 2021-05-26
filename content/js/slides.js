import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

function PdfEmbed(props) {
    return html`<embed src=${props.src} type="application/pdf"
                 width=${props.width} height=${props.height}> </embed>`;
}
PdfEmbed.defaultProps = {
    'width': '600',
    'height': '375'
};

let current_document = window.location.href;
let last_slash = current_document.lastIndexOf("/");

let slide_path = "";
if (last_slash == current_document.length-1) {
    slide_path = current_document + "slides.pdf";
} else {
    slide_path = current_document.substring(0, last_slash) + "/slides.pdf";
}

fetch(slide_path, {'method': 'HEAD'}).then((response) => {
    return response.status;
}).then((st) => {
    if (st == 200) {
        let div_center = document.createElement("div");
        div_center.style = "text-align: center";
        div_center.className = "no-print";

        render(html`<${PdfEmbed} src=${slide_path} />`, div_center);
        
        document.querySelector("h1").insertAdjacentElement("afterend", div_center);
    }
});
