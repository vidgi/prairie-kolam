// prairie kolam

function preload() {}

function setup() {
  var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  background(200, 200, 200);
  rectMode(RADIUS);
  ellipseMode(RADIUS);
}

// TO DO:
// - write grid pattern function and make it apply for IsInner
// - add randomness in colors and sizes

// later:
// - radial, images

function draw() {
  // outer layer
  generatedLayer([255, 100, 255], width, 15);

  // middle layer
  generatedLayer([255, 255, 0], width / 2.5, 7);

  // inner layer
  generatedLayer([255, 100, 0], width / 3, 4.5, true);
}

function cornerPattern(cornerParam) {
  noStroke();
  fill(0, 255, 0);
  var cornerSize = 10;
  ellipse(width / cornerParam, width / cornerParam, cornerSize, cornerSize);
  ellipse(width - width / cornerParam, width / cornerParam, cornerSize, cornerSize);
  ellipse(width / cornerParam, width - width / cornerParam, cornerSize, cornerSize);
  ellipse(width - width / cornerParam, width - width / cornerParam, cornerSize, cornerSize);
}

function borderPattern(cornerParam) {
  noStroke();
  fill(0, 255, 0);
  var borderlength = width - 2 * (width / cornerParam);
  var dotSize = 5;

  var spacing = borderlength / (2 * dotSize);
  // top
  for (let i = 0; i < spacing; i++) {
    ellipse(width / cornerParam + i * 2 * dotSize, width / cornerParam, dotSize / 2, dotSize / 2);
  }

  // bottom
  for (let i = 0; i < spacing; i++) {
    ellipse(width / cornerParam + i * 2 * dotSize, width - width / cornerParam, dotSize / 2, dotSize / 2);
  }

  // right
  for (let i = 0; i < spacing; i++) {
    ellipse(width - width / cornerParam, width / cornerParam + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }

  // left
  for (let i = 0; i < spacing; i++) {
    ellipse(width / cornerParam, width / cornerParam + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }
}

function gridPattern(cornerParam) {
  noStroke();
  fill(0, 0, 200);
  var gridPadding = 20;
  var borderlength = width - 2 * (width / cornerParam) - 2 * gridPadding;
  var dotSize = 5;

  var spacing = borderlength / (2 * dotSize);
  // top
  for (let i = 0; i < spacing; i++) {
    for (let j = 0; j < spacing; j++) {
      ellipse(
        gridPadding + width / cornerParam + i * 2 * dotSize,
        gridPadding + width / cornerParam + j * 2 * dotSize,
        dotSize / 2,
        dotSize / 2
      );
    }
  }
}

function generatedLayer(layerColor, layerSize, cornerParam, isInner) {
  fill(layerColor);
  noStroke();
  rect(width / 2, height / 2, layerSize, layerSize);
  cornerPattern(cornerParam);
  borderPattern(cornerParam);
  if (isInner) {
    gridPattern(cornerParam);
  }
}
