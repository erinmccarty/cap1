let angle = 0;
let cam;
//let dog;
//let cow;
let blob;

function preload(){
 
  //dog = loadImage('dog1.jpeg');
  //cow = loadImage('cow1.jpeg');
  
  blob=loadModel('blobtest3.obj');

}

function setup(){
  createCanvas(1000, 900, WEBGL);
  
  cam=createCapture(VIDEO);
  cam.size(1000, 900);
  cam.hide();
 
}
  

function draw(){
  
  //background(0, 0, 255);
  
  //image(cam, 400, 300, 0, 0);
  
  //let camX = map(mouseX, 0, width*2, -200, 200);
  //let camY = map(0, mouseY, width*2, -200, 200);
  //camera(camX, camY, (height / 2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);
  
  
  let camX = map(mouseX, 0, width*2, -200, 200);
  let camY = map(0, mouseY, width*2, -500, 200);
  camera(camX, camY, height , camX, 0, 0, 0, 1, 0);
  
  
  
  //let dx= mouseX/width-2;
  //let dy= mouseX/height-2;
  //let v = createVector(dx, dy, -2);
  //v.div(100);
  
  ambientLight(255);
  //directionalLight(255,0,0,v);

  /*
  //SELFIE
  push();
  //rotateY(3);
  //rotateY(angle/2);
  rotateX(angle/2);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  
  //fill(0, 0, 255);
  noStroke();
  ambientMaterial(255);
  
  texture(dog);
  sphere(100);
  pop();
  */

  //DOG
  push();
  noStroke();
  translate(0, 0, 0);
  scale(300);
  
  rotateX(angle/4);
  rotateY(angle * 0.17);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(blob);
  pop();
  
  
  /*
  push();
  noStroke();
  translate(-500, 0, 0);
    rotateX(angle/2);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.1);
  texture(cow);
  sphere(100, 100, 100);
  pop();
  */
  
  
  
  
  
    angle += 0.03;
}
