// prairie kolam

function preload() {}

function setup() {
  var canvas = createCanvas(0.98 * windowHeight, 0.98 * windowHeight);
  background(200, 200, 200);
  rectMode(RADIUS);
}

// TO DO:
// - write border pattern function
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
  generatedLayer([255, 100, 0], width / 3, 4.5);
}

function cornerPattern(cornerParam) {
  noStroke();
  fill(0, 255, 0);
  ellipse(width / cornerParam, width / cornerParam, 20, 20);
  ellipse(width - width / cornerParam, width / cornerParam, 20, 20);
  ellipse(width / cornerParam, width - width / cornerParam, 20, 20);
  ellipse(width - width / cornerParam, width - width / cornerParam, 20, 20);
}

function generatedLayer(layerColor, layerSize, cornerParam, isInner) {
  fill(layerColor);
  noStroke();
  rect(width / 2, height / 2, layerSize, layerSize);
  cornerPattern(cornerParam);
}
