let backImage

function preload(){
  backImage = loadImage("smolplane.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  let s = 'Stay, stay at home, my heart, and rest; Home-keeping hearts are happiest, For those that wander they know not where Are full of trouble and full of care; To stay at home is best';
  text(s, 500, 500, 160, 600);

  let stwo = 'Weary and homesick and distressed, They wander east, they wander west, And are baffled and beaten and blown about By the winds of the wilderness of doubt; To stay at home is best.';
  text(stwo, 500, 500, 160, 350);

  let sthree = 'Then stay at home, my heart, and rest; The bird is safest in its nest; O’er all that flutter their wings and fly A hawk is hovering in the sky; To stay at home is best.'
  text(sthree, 500, 500, 160, 100)

  let sfour = '"Song" by Henry Wadsworth Longfellow'
  text(sfour, 500, 500, 160, 690)
}

function draw(){
    cursor('https://combatbaby.neocities.org/index/1star.gif');

  image (backImage, windowWitdth, windowHeight)
}