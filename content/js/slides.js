"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n"], ["\n  text-align: center;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import PdfEmbed from "./components/PdfEmbed/index.js";

var current_document = window.location.href;
var last_slash = current_document.lastIndexOf("/");

var slide_path = "";
if (last_slash == current_document.length - 1) {
  slide_path = current_document + "slides.pdf";
} else {
  slide_path = current_document.substring(0, last_slash) + "/slides.pdf";
}

var Container = window.styled.div(_templateObject);

fetch(slide_path, { method: "HEAD" }).then(function (response) {
  return response.status;
}).then(function (st) {
  if (st == 200) {
    var container = document.createElement("div");
    document.querySelector("h1").insertAdjacentElement("afterend", container);

    ReactDOM.render(React.createElement(
      Container,
      { className: "no-print" },
      React.createElement(PdfEmbed, { src: slide_path })
    ), container);
  }
});