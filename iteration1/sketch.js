// prairie kolam

var grass;

function preload() {
  grass = loadImage("./img/6.png");
}
function setup() {
  var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  // var canvas = createCanvas(2000, 2000);

  background(200, 200, 200);
  rectMode(RADIUS);
  ellipseMode(RADIUS);
  imageMode(CENTER);
}

// TO DO:

// - better randomized colors
// - add images and rotation
// https://stackoverflow.com/questions/45388765/how-to-rotate-image-in-p5-js
// add different patterns in grids (checker, square with dots, diagonal colors)

function draw() {
  // var numOfLayers = 5;
  var numOfLayers = floor(random(3, 5, 1));

  var layerWidth = width / numOfLayers;

  for (let i = 0; i < numOfLayers; i++) {
    if (i === numOfLayers - 1) {
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - 20 - layerWidth * i, true);
    } else {
      generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width - 20 - layerWidth * i);
    }
  }

  // // outer layer
  // generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 1.2);

  // generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 1.5);

  // // middle layer
  // generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 2.2);

  // // inner layer
  // generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 2.7, true);
  noLoop();
}

function cornerPattern(layerSize, layerColor) {
  noStroke();
  stroke(0);

  var borderXStart = (width - layerSize) / 2;

  strokeWeight(0.5);
  fill([random(100, 255), random(0, 120), random(0, 120), 255]);
  // fill(layerColor);
  var cornerSize = floor(random(20, 50));
  image(grass, borderXStart, borderXStart, cornerSize, cornerSize);
  image(grass, width - borderXStart, borderXStart, cornerSize, cornerSize);
  image(grass, borderXStart, width - borderXStart, cornerSize, cornerSize);
  image(grass, width - borderXStart, width - borderXStart, cornerSize, cornerSize);
  // rect(borderXStart, borderXStart, cornerSize, cornerSize);
  // rect(width - borderXStart, borderXStart, cornerSize, cornerSize);
  // rect(borderXStart, width - borderXStart, cornerSize, cornerSize);
  // rect(width - borderXStart, width - borderXStart, cornerSize, cornerSize);
}

function borderPattern(layerSize) {
  noStroke();
  stroke(0);

  strokeWeight(0.5);
  fill([random(100, 200), random(100, 200), random(100, 200), 255]);

  var borderXStart = (width - layerSize) / 2;

  var dotSize = floor(random(2, 10));
  var gridPadding = dotSize * 5;
  var borderlength = layerSize - 2 * gridPadding;

  // var dotSize = 5;

  var spacing = borderlength / (2 * dotSize);
  // top
  for (let i = 0; i < spacing; i++) {
    ellipse(borderXStart + gridPadding + i * 2 * dotSize, borderXStart, dotSize / 2, dotSize / 2);
  }

  // bottom
  for (let i = 0; i < spacing; i++) {
    ellipse(borderXStart + gridPadding + i * 2 * dotSize, width - borderXStart, dotSize / 2, dotSize / 2);
  }

  // right
  for (let i = 0; i < spacing; i++) {
    ellipse(width - borderXStart, borderXStart + gridPadding + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }

  // left
  for (let i = 0; i < spacing; i++) {
    ellipse(borderXStart, borderXStart + gridPadding + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }
}

function gridPattern(layerSize) {
  noStroke();
  stroke(0);

  strokeWeight(0.5);
  fill([random(0, 120), random(0, 120), random(0, 120), 255]);
  var borderXStart = (width - layerSize) / 2;
  var dotSize = floor(random(3, 7));
  var gridPadding = dotSize * 10;
  var borderlength = layerSize - 2 * gridPadding;

  var spacing = borderlength / (2 * dotSize);
  // top
  for (let i = 0; i < spacing; i++) {
    for (let j = 0; j < spacing; j++) {
      // image(grass, borderXStart + gridPadding + i * 2 * dotSize, borderXStart + gridPadding + j * 2 * dotSize, dotSize / 2, dotSize / 2);

      ellipse(borderXStart + gridPadding + i * 2 * dotSize, borderXStart + gridPadding + j * 2 * dotSize, dotSize / 2, dotSize / 2);
    }
  }
}

function generatedLayer(layerColor, layerSize, isInner) {
  fill(layerColor);
  noStroke();
  rect(width / 2, height / 2, layerSize, layerSize);
  borderPattern(layerSize);
  cornerPattern(layerSize, layerColor);

  if (isInner) {
    gridPattern(layerSize);
  }
}
