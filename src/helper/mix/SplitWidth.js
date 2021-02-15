const resolveMinWidth = (viewWidth) => {
  if (viewWidth < 576) {
    return 200;
  }
  if (viewWidth < 768) {
    return 200;
  }
  if (viewWidth < 992) {
    return 250;
  }
  return 290;
};

const resolveHalfWidth = (viewWidth) => {
  if (viewWidth < 576) {
    return 300;
  }
  if (viewWidth < 768) {
    return 400;
  }
  if (viewWidth < 992) {
    return 500;
  }
  return 600;
};

const resolveMaxWidth = (viewWidth) => {
  if (viewWidth < 576) {
    return 300;
  }
  if (viewWidth < 768) {
    return 450;
  }
  if (viewWidth < 992) {
    return 690;
  }
  if (viewWidth < 1150) {
    return 900;
  }
  return 1100;
};

export { resolveHalfWidth, resolveMaxWidth, resolveMinWidth };
