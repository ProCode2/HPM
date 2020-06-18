let validPos = [];
let step;
let multiplier = 0.01;
let alpha;
let red, blue, green;
let img;
let randomPos;


function preload() {
  img = loadImage('./pride.jpg');
  img.width = 720;
  img.height = 720;
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  background (0);
  
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = (x + y * img.width)*4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      
      if (r > 10 && g > 10 && b > 10 && a >200) {
        validPos.push(createVector(x, y));
      }
    }
  }
}

function draw() {
  //draw loop
  step = noise(multiplier) * 10;
  multiplier++;
  frameRate(10);
  for(let i = 0; i< 100; i++){
  randomPos = floor(random(0, validPos.length));
  alpha = map(multiplier, 0 , 10, 0, 255);
  red = floor(random(0, 255));
  blue = floor(random(0, 255));
  green = floor(random(0, 255))
  fill(red, blue, green, alpha);
  stroke(red, blue, green, alpha);
  strokeWeight(4);
  ellipseMode(CENTER);
  ellipse(validPos[randomPos].x, validPos[randomPos].y, 1);
  }
  
}
