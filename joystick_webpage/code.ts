
const resizeDivs = () => {
  const scaleHeight = window.innerHeight / 22;
  const scaleWidth = window.innerWidth / 22;
  let scale = scaleWidth;
  if (scaleHeight < scaleWidth) {
    scale = scaleHeight;
  }
  // background
  const backgroundHeight = scale * 22;
  const backgroundLeft = Math.floor((window.innerWidth - (scale * 22)) / 2);
  const backgroundTop = Math.floor((window.innerHeight - (scale * 22)) / 2);
  const backgroundWidth = scale * 22;
  const divBackground = <HTMLDivElement>document.getElementById('background');
  if (divBackground !== null) {
    divBackground.style.height = `${backgroundHeight}px`;
    divBackground.style.left = `${backgroundLeft}px`;
    divBackground.style.top = `${backgroundTop}px`;
    divBackground.style.width = `${backgroundWidth}px`;
  }
};
const main = () => {
  window.addEventListener('resize', resizeDivs);
  resizeDivs();
};
main();