// Maria Celeste Condoluci
//https://youtu.be/bpYSQ30E02w

let imagen;
let tam;
let linea;

function preload() {
  imagen = loadImage("data/img1.jpeg");
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  image(imagen, 0, 0);
  translate(width / 2, 0);
  dibujarRectangulos(10, tam || 2, 67, 8);
}

function mouseMoved() {
  stroke(colorLineas());
}

function mousePressed() {
  cambiarFondo();
}

function mouseDragged() {
  tam = tamañoLineas(1, 10);
  dibujarRectangulos(6, tam, 67, 8);
}
