export const Width = ({ value = [], outerPadding, children, ...rest }) => {
  let width = value.map((e) => {
    const gap = 100 / (1288 / 56);
    const gapmath = (size) => -gap / (12 / size) + gap;
    return `${e !== 12 ? (100 * e) / 12 - gapmath(e) : "100"}%`;
  });
  return (
    <div {...rest} sx={{ width: width }}>
      {children}
    </div>
  );
};
