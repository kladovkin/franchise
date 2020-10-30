export default function offset(node) {
  const offset = { left: 0, top: 0 };

  if (node.offsetParent) {
    do {
      offset.left += node.offsetLeft;
      offset.top += node.offsetTop;
    } while (node = node.offsetParent); // eslint-disable-line no-param-reassign, no-cond-assign
  } else {
    offset.left = node.offsetLeft;
    offset.top = node.offsetTop;
  }

  return offset;
}
