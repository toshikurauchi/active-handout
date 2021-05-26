export default function PdfEmbed({ src, width, height }) {
  return (
    <embed type="application/pdf" src={src} width={width} height={height} />
  );
}

PdfEmbed.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

PdfEmbed.defaultProps = {
  width: 600,
  height: 375,
};
