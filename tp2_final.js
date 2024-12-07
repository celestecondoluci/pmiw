//https://youtu.be/g-cK-LmReAw
let juego;
let fondo;
let sonidoFondo;
let sonidoPunto;
let sonidoPerder;
let sonidoGanar;
let correctosImg;
let incorrectosImg;

function preload() {

  fondo = loadImage("data/fondocasa.jpg");
  personajeImg = loadImage("data/candace.png");
  sonidoFondo = loadSound("/data/intro.mp3");
  correctosImg = [
    loadImage("data/lampara.png"),
    loadImage("data/florero.png"),
    loadImage("data/copa.png"),
  ];
  incorrectosImg = [
    loadImage("data/piedra.png"),
    loadImage("data/bomba.png"),
  ];
  sonidoPunto = loadSound("data/colision.mp3");
  sonidoPerder = loadSound("data/perder.mp3");
  sonidoGanar = loadSound("data/ganar.mp3");
}
function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  juego.draw();
}
