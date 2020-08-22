const IMG_WIDTH = 4096;
const IMG_HEIGHT = 4096;
const IMG_PATH = `https://picsum.photos/id/1/${IMG_WIDTH}/${IMG_HEIGHT}`;
const SECRET = 'Rofl1234';

const {width, height} = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image(IMG_WIDTH, IMG_HEIGHT);
img.src = IMG_PATH;
img.crossOrigin = "Anonymous";

img.addEventListener('load', async () => {
  ctx.drawImage(img, 0, 0, width, height);
  const imgData = ctx.getImageData(0, 0, width, height);
  const {data} = imgData;

  const response = await fetch('./shuffleKey.json');
  const reader = new FileReader();
  reader.readAsText(await response.blob());
  reader.onload = () => {
    const shuffle = JSON.parse(reader.result);
    shuffle.forEach(([source, destination]) =>
    [data[source], data[destination]] = [data[destination], data[source]]);
    ctx.putImageData(imgData, 0, 0);

    setTimeout(() => {
      shuffle.reverse().forEach(([source, destination]) =>
        [data[source], data[destination]] = [data[destination], data[source]]);
      ctx.putImageData(imgData, 0, 0);
    }, 2000);
  }
});