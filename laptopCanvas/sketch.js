let a,m;
function preload() {
  keyb = loadImage("key.jfif");
  pic = loadImage("pic.jpg");
  logo = loadImage("apple11.jpg");
  
}
function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  a = -89;
  m=0;
}

function draw() {
  if(!mouseIsPressed){
    m+=0.7;
    rotateY(m);
  }
  if (a < -2) a += 0.7;
  background(200,0);
  ambientLight(101, 113, 216);
  noStroke();
  directionalLight(100, 100, 100, 0, 1, 1);
  orbitControl(3, 3, 0.3);
  push();
  translate(0, 100, 100);
  rotateX(90); //base
  box(300, 200, 20);
  pop();

  push();
  translate(0, 100, 0);
  rotateX(a);
  translate(0, -100, 12);
  image(pic, -120, -80, 240 , 160); //pic
  translate(0, -100, -24);
  image(logo, -150, 0, 300, 200); //logo
  pop();

  push();
  translate(0, 100, 0);
  rotateX(a);
  translate(0, -100, 0);
  box(300, 200, 20); //screen
  pop();

  push();
  translate(0, 88, 100);
  rotateX(90); //keyboard
  image(keyb, -120, -30, 240, 100);
  pop();
  
}
