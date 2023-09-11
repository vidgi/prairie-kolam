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
  // fl9 = loadImage("./img/indian-blanket.png");
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
    // fl9,
    fl10,
    // fl11,
    fl12,
    fl13,
  ];
}
function setup() {
  // var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  var canvas = createCanvas(6000, 6000);

  rectMode(RADIUS);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  blendMode(BLEND);
  frameRate(5);
}

// TODO:
// - fix borders corners when no corner pattern or not symmetric
// - add different patterns in grids (alternating patterns and sizes, maybe abcabc or ab or aab or something...)
// - better randomized colors

var count = 0;
function draw() {
  background(200, 200, 200);

  // var numOfLayers = 5;
  var numOfLayers = floor(random(1, 5, 1));

  var layerWidth = width / numOfLayers;

  var littleGap = random(200, 500);

  for (let i = 0; i < numOfLayers; i++) {
    if (i === numOfLayers - 1) {
      // inner layer
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - littleGap - layerWidth * i, true, false);
    } else if (i === 0) {
      // outer layer
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - littleGap - layerWidth * i, false, true);
    } else {
      // middle layers
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - littleGap - layerWidth * i, false, false);
    }
  }

  // count += 1;
  // saveCanvas("design-" + count, "jpg");

  // if (count > 100) {
  //   noLoop();
  // }
  noLoop();
}

function cornerPattern(layerSize, layerColor, noRotation) {
  noStroke();

  var borderXStart = (width - layerSize) / 2;
  var cornerSize = floor(random(300, 500));

  var selectedImageIndex = floor(random(0, imageData.length - 1));
  var grass = imageData[selectedImageIndex];
  blendMode(ADD);
  var factor = grass.height / cornerSize;
  var angle = 45;
  var rotationAngle = 90;
  if (noRotation) {
    angle = 0;
    rotationAngle = 0;
  }

  drawImage(grass, borderXStart, borderXStart, grass.width / factor, grass.height / factor, angle - rotationAngle); // top-left
  drawImage(grass, width - borderXStart, borderXStart, grass.width / factor, grass.height / factor, angle); // top-right
  drawImage(grass, width - borderXStart, width - borderXStart, grass.width / factor, grass.height / factor, angle + rotationAngle); // bottom-right
  drawImage(grass, borderXStart, width - borderXStart, grass.width / factor, grass.height / factor, angle + rotationAngle + rotationAngle); // bottom-left

  blendMode(BLEND);
}

function drawImage(imageFile, positionX, positionY, width, height, angle) {
  push();
  translate(positionX, positionY);
  rotate((PI / 180) * angle);
  image(imageFile, 0, 0, width, height);
  pop();
}

function borderPattern(layerSize, isOuter, noRotation) {
  noStroke();
  var borderXStart = (width - layerSize) / 2;

  var dotSize = floor(random(20, 100));
  var gridPadding = dotSize * 5;
  if (isOuter) gridPadding = 0;
  var borderlength = layerSize - 2 * gridPadding;

  var selectedImageIndex = floor(random(0, imageData.length - 1));
  var grass = imageData[selectedImageIndex];

  var spacing = borderlength / (2 * dotSize);

  blendMode(ADD);
  var grassSize = (5 * dotSize) / 2;
  var factor = grass.height / grassSize;

  var angle = 90;
  if (noRotation) angle = 0;

  // top
  for (let i = 0; i < spacing; i++) {
    drawImage(grass, borderXStart + gridPadding + i * 2 * dotSize, borderXStart, grass.width / factor, grass.height / factor, angle * 0);
  }

  // bottom
  for (let i = 0; i < spacing; i++) {
    drawImage(
      grass,
      borderXStart + gridPadding + i * 2 * dotSize,
      width - borderXStart,
      grass.width / factor,
      grass.height / factor,
      angle * 2
    );
  }

  // right
  for (let i = 0; i < spacing; i++) {
    drawImage(
      grass,
      width - borderXStart,
      borderXStart + gridPadding + i * 2 * dotSize,
      grass.width / factor,
      grass.height / factor,
      angle
    );
  }

  // left
  for (let i = 0; i < spacing; i++) {
    drawImage(grass, borderXStart, borderXStart + gridPadding + i * 2 * dotSize, grass.width / factor, grass.height / factor, angle * 3);
  }

  blendMode(BLEND);
}

function gridPattern(layerSize) {
  noStroke();
  var borderXStart = (width - layerSize) / 2;
  var dotSize = floor(random(30, 70));
  var gridPadding = dotSize * 10;
  var borderlength = layerSize - 2 * gridPadding;
  var selectedImageIndex = floor(random(0, imageData.length - 1));
  var grass = imageData[selectedImageIndex];
  var spacing = borderlength / (2 * dotSize);

  var grassSize = (5 * dotSize) / 2;
  var factor = grass.height / grassSize;

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

function generatedLayer(layerColor, layerSize, isInner, noCorner) {
  fill(layerColor);
  noStroke();
  rect(width / 2, height / 2, layerSize, layerSize);
  if (noCorner === false) {
    noCorner = random([true, false]);
  }

  noRotation = random([true, false]);

  borderPattern(layerSize, noCorner, noRotation);
  if (noCorner === false) cornerPattern(layerSize, layerColor, noRotation);

  if (isInner) {
    gridPattern(layerSize);
  }
}
