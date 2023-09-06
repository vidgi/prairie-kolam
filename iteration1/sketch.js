// prairie kolam

function preload() {}

function setup() {
  var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  background(200, 200, 200);
  rectMode(RADIUS);
  ellipseMode(RADIUS);
}

// TO DO:

// - make number of layers a param
// - make layer size and corner param related based on number of layers and random
// - add randomness in sizes
// - add images

function draw() {
  // outer layer
  generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width, width / 40);

  // middle layer
  generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 2.5, width / 105);

  // inner layer
  generatedLayer([random(0, 255), random(0, 255), random(0, 255), 100], width / 3, width / 160, true);
  noLoop();
}

function cornerPattern(cornerParam, layerColor) {
  noStroke();
  stroke(0);

  strokeWeight(0.5);
  fill([random(100, 255), random(0, 120), random(0, 120), 255]);
  // fill(layerColor);
  var cornerSize = 10;
  rect(width / cornerParam, width / cornerParam, cornerSize, cornerSize);
  rect(width - width / cornerParam, width / cornerParam, cornerSize, cornerSize);
  rect(width / cornerParam, width - width / cornerParam, cornerSize, cornerSize);
  rect(width - width / cornerParam, width - width / cornerParam, cornerSize, cornerSize);
}

function borderPattern(cornerParam) {
  noStroke();
  stroke(0);

  strokeWeight(0.5);
  fill([random(100, 200), random(100, 200), random(100, 200), 255]);
  var gridPadding = 20;

  var borderlength = width - 2 * (width / cornerParam) - 2 * gridPadding;
  var dotSize = 5;

  var spacing = borderlength / (2 * dotSize);
  // top
  for (let i = 0; i < spacing; i++) {
    ellipse(gridPadding + width / cornerParam + i * 2 * dotSize, width / cornerParam, dotSize / 2, dotSize / 2);
  }

  // bottom
  for (let i = 0; i < spacing; i++) {
    ellipse(gridPadding + width / cornerParam + i * 2 * dotSize, width - width / cornerParam, dotSize / 2, dotSize / 2);
  }

  // right
  for (let i = 0; i < spacing; i++) {
    ellipse(width - width / cornerParam, gridPadding + width / cornerParam + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }

  // left
  for (let i = 0; i < spacing; i++) {
    ellipse(width / cornerParam, gridPadding + width / cornerParam + i * 2 * dotSize, dotSize / 2, dotSize / 2);
  }
}

function gridPattern(cornerParam) {
  noStroke();
  stroke(0);

  strokeWeight(0.5);
  fill([random(0, 120), random(0, 120), random(0, 120), 100]);
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
  borderPattern(cornerParam);
  cornerPattern(cornerParam, layerColor);

  if (isInner) {
    gridPattern(cornerParam);
  }
}
