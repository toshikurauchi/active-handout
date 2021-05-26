export default function PdfEmbed(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height;

  return React.createElement("embed", { type: "application/pdf", src: src, width: width, height: height });
}

PdfEmbed.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

PdfEmbed.defaultProps = {
  width: 600,
  height: 375
};