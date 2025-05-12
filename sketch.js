

let sourceText;
let wordsworth;
let ghibli;
let startIndex = 0;
let bttn;

function preload() {
  ghibli = loadImage("smolplane.jpg");
  sourceText = loadStrings("song.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  wordsworth = sourceText.join(' ');
  textFont("Courier New");
  bttn = createButton ("READ");
  bttn.mousePressed(redirect);
}

function draw() {

  cursor('https://combatbaby.neocities.org/index/1star.gif');

  background(0);
  frameRate(5);
  
  let charIndex = startIndex;
  let w = width / ghibli.width;
  let h = height / ghibli.height;
  ghibli.loadPixels();
    for (let j = 0; j < ghibli.height; j++) {
  for (let i = 0; i < ghibli.width; i++) {
      const pixelIndex = (i + j * ghibli.width) * 4;
      const r = ghibli.pixels[pixelIndex + 0];
      const g = ghibli.pixels[pixelIndex + 1];
      const b = ghibli.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(avg);      
      textSize(w*1.4);
      textAlign(CENTER, CENTER);
      
      text(wordsworth.charAt(charIndex % wordsworth.length), i * w + w * 0.5, j * h + h * 0.5);
      charIndex++;
    }
  }
  
  startIndex++;
  
  
}

function redirect(){
  window.location.href = "./next/index.html";
}