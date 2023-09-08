// prairie kolam

var imageData;
function preload() {
  // img1 = loadImage("./img/1.png");
  // img2 = loadImage("./img/2.png");
  // img3 = loadImage("./img/3.png");
  // img4 = loadImage("./img/4.png");
  img5 = loadImage("./img/5.png");
  img6 = loadImage("./img/6.png");
  img7 = loadImage("./img/7.png");
  img8 = loadImage("./img/8.png");
  // plant1 = loadImage("./img/plant1.png");
  plant2 = loadImage("./img/plant2.png");
  // plant3 = loadImage("./img/plant3.png");
  plant4 = loadImage("./img/plant4.png");
  plant5 = loadImage("./img/plant5.png");
  plant6 = loadImage("./img/plant6.png");
  plant7 = loadImage("./img/plant7.png");
  // planty1 = loadImage("./img/planty1.png");
  planty2 = loadImage("./img/planty2.png");
  // planty3 = loadImage("./img/planty3.png");
  planty4 = loadImage("./img/planty4.png");
  // planty5 = loadImage("./img/planty5.png");
  planty6 = loadImage("./img/planty6.png");
  // fl1 = loadImage("./img/lance-leaved-coreopsis.png");
  fl2 = loadImage("./img/babys-breath.png");
  fl3 = loadImage("./img/bachelor-button.png");
  // fl4 = loadImage("./img/black-eyed-susan.png");
  fl5 = loadImage("./img/blue-flax.png");
  fl6 = loadImage("./img/candy-tuft.png");
  // fl7 = loadImage("./img/clasping-coneflower.png");
  fl8 = loadImage("./img/evening-primrose.png");
  fl9 = loadImage("./img/indian-blanket.png");
  fl10 = loadImage("./img/indian-paintbrush.png");
  // fl11 = loadImage("./img/showy-primrose.png");
  fl12 = loadImage("./img/texas-bluebonnet.png");
  fl13 = loadImage("./img/white-yarrow.png");

  imageData = [
    // img1,
    // img2,
    // img3,
    // img4,
    img5,
    img6,
    img7,
    img8,
    // plant1,
    plant2,
    // plant3,
    plant4,
    plant5,
    plant6,
    plant7,
    // planty1,
    planty2,
    // planty3,
    planty4,
    // planty5,
    planty6,
    // fl1,
    fl2,
    fl3,
    // fl4,
    fl5,
    fl6,
    // fl7,
    fl8,
    fl9,
    fl10,
    // fl11,
    fl12,
    fl13,
  ];
}
function setup() {
  var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  // var canvas = createCanvas(2000, 2000);

  background(200, 200, 200);
  rectMode(RADIUS);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  blendMode(BLEND);
}

// TO DO:

// - add rotation for corners with https://stackoverflow.com/questions/45388765/how-to-rotate-image-in-p5-js
// - add rotation for borders too

// - improve grid settings with images
// - scale to larger sizes
// - add different patterns in grids (checker, square with dots, diagonal colors)
// - better randomized colors

function draw() {
  // var numOfLayers = 5;
  var numOfLayers = floor(random(2, 5, 1));

  var layerWidth = width / numOfLayers;

  for (let i = 0; i < numOfLayers; i++) {
    if (i === numOfLayers - 1) {
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - 20 - layerWidth * i, true, false);
    } else if (i === 0) {
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - 20 - layerWidth * i, false, true);
    } else {
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - 20 - layerWidth * i, false, false);
    }
  }
  noLoop();
}

function cornerPattern(layerSize, layerColor) {
  noStroke();

  var borderXStart = (width - layerSize) / 2;
  var cornerSize = floor(random(20, 50));

  selectedImageIndex = floor(random(0, imageData.length - 1));
  grass = imageData[selectedImageIndex];
  blendMode(ADD);

  factor = grass.height / cornerSize;

  image(grass, borderXStart, borderXStart, grass.width / factor, grass.height / factor);
  image(grass, width - borderXStart, borderXStart, grass.width / factor, grass.height / factor);
  image(grass, borderXStart, width - borderXStart, grass.width / factor, grass.height / factor);
  image(grass, width - borderXStart, width - borderXStart, grass.width / factor, grass.height / factor);
  blendMode(BLEND);
}

function borderPattern(layerSize, isOuter) {
  noStroke();
  var borderXStart = (width - layerSize) / 2;

  var dotSize = floor(random(2, 10));
  var gridPadding = dotSize * 5;
  if (isOuter) gridPadding = 0;
  var borderlength = layerSize - 2 * gridPadding;

  selectedImageIndex = floor(random(0, imageData.length - 1));
  grass = imageData[selectedImageIndex];

  var spacing = borderlength / (2 * dotSize);

  blendMode(ADD);
  grassSize = (5 * dotSize) / 2;
  factor = grass.height / grassSize;

  // top
  for (let i = 0; i < spacing; i++) {
    image(grass, borderXStart + gridPadding + i * 2 * dotSize, borderXStart, grass.width / factor, grass.height / factor);
  }

  // bottom
  for (let i = 0; i < spacing; i++) {
    image(grass, borderXStart + gridPadding + i * 2 * dotSize, width - borderXStart, (5 * dotSize) / 2, (5 * dotSize) / 2);
  }

  // right
  for (let i = 0; i < spacing; i++) {
    image(grass, width - borderXStart, borderXStart + gridPadding + i * 2 * dotSize, (5 * dotSize) / 2, (5 * dotSize) / 2);
  }

  // left
  for (let i = 0; i < spacing; i++) {
    image(grass, borderXStart, borderXStart + gridPadding + i * 2 * dotSize, (5 * dotSize) / 2, (5 * dotSize) / 2);
  }

  blendMode(BLEND);
}

function gridPattern(layerSize) {
  noStroke();
  var borderXStart = (width - layerSize) / 2;
  var dotSize = floor(random(3, 7));
  var gridPadding = dotSize * 10;
  var borderlength = layerSize - 2 * gridPadding;
  selectedImageIndex = floor(random(0, imageData.length - 1));
  grass = imageData[selectedImageIndex];
  var spacing = borderlength / (2 * dotSize);

  grassSize = (5 * dotSize) / 2;
  factor = grass.height / grassSize;

  // top
  blendMode(ADD);

  for (let i = 0; i < spacing; i++) {
    for (let j = 0; j < spacing; j++) {
      image(
        grass,
        borderXStart + gridPadding + i * 2 * dotSize,
        borderXStart + gridPadding + j * 2 * dotSize,
        grass.width / factor,
        grass.height / factor
      );
    }
  }
  blendMode(BLEND);
}

function generatedLayer(layerColor, layerSize, isInner, isOuter) {
  fill(layerColor);
  noStroke();
  rect(width / 2, height / 2, layerSize, layerSize);
  if (isOuter === false) {
    isOuter = random([true, false]);
  }
  borderPattern(layerSize, isOuter);
  if (isOuter === false) cornerPattern(layerSize, layerColor);

  if (isInner) {
    gridPattern(layerSize);
  }
}
