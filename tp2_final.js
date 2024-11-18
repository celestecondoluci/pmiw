//https://youtu.be/1I3kLCM-RE4
let personaje;
let temporizador;
let fondo;
let objetosCorrectos = [];
let objetosIncorrectos = [];
let puntos = 0;
let sonido;
let estadoJuego = "inicio";
let sonidoReproducido = false;


function preload() {
  fondo = loadImage('data/fondocasa.jpg');
  personajeImg = loadImage('data/candace.png');
  
  sonido = loadSound('/data/intro.mp3');

  correctosImg.push(loadImage('data/lampara.png'));
  correctosImg.push(loadImage('data/florero.png'));
  correctosImg.push(loadImage('data/copa.png'));

  incorrectosImg.push(loadImage('data/piedra.png'));
  incorrectosImg.push(loadImage('data/bomba.png'));
}


function setup() {
  createCanvas(640, 480);
  temporizador = new Temporizador(45);
  personaje  = new Personaje();
  for (let i = 0; i < 5; i++) {
    objetosCorrectos.push(new ObjetosCasa(random(2, 5)));
  }
  for (let i = 0; i < 5; i++) {
    objetosIncorrectos.push(new ObjetoIncorrecto(random(2, 5)));
  }
}

function draw() {
  if (estadoJuego === "inicio") {

    background(  255, 99, 71)
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("¡Es una reunion privada!", width / 2, height / 3);
    textSize(16);
    text(
      "Instrucciones:\n- Mueve a Candace con el mouse.\n- Atrapa los objetos de la casa para ganar puntos.\n- Evita los objetos incorrectos.\n- Consigue 200 puntos en 45 segundos para ganar.\n¡Buena suerte!",
      width / 2,
      height / 2
    );
    let botonX = width / 2 - 75;
    let botonY = height - 100;
    let botonAncho = 150;
    let botonAlto = 50;
    fill(111, 244, 147);
    rect(botonX, botonY, botonAncho, botonAlto, 10);
    fill(19, 21, 129);
    textSize(20);
    text("Iniciar", botonX + botonAncho / 2, botonY + botonAlto / 2);

    if (
      mouseIsPressed &&
      mouseX > botonX &&
      mouseX < botonX + botonAncho &&
      mouseY > botonY &&
      mouseY < botonY + botonAlto
    ) {
      estadoJuego = "jugando";
      sonido.play(); 
      sonidoReproducido = true;
    }
  } else if (estadoJuego === "jugando") {

    image(fondo, 0, 0);
    personaje.dibujar();
    personaje.moverConMouse();

    for (let obj of objetosCorrectos) {
      obj.dibujar();
      obj.actualizar();
      obj.reciclar();
      if (obj.colisionar(personaje)) {
        puntos++;
      }
    }

    for (let obj of objetosIncorrectos) {
      obj.dibujar();
      obj.actualizar();
      obj.reciclar();
      if (obj.colisionar(personaje)) {
        estadoJuego = "perdiste";
        sonido.stop(); 
      }
    }

    temporizador.actualizar();
    temporizador.mostrar();

    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Puntos: ${puntos}`, 10, 10);

    if (temporizador === 0) {
      if (puntos >= 200) {
        estadoJuego = "ganaste";
      } else {
        estadoJuego = "perdiste";
      }
      sonido.stop(); 
    }
  } else {
    background(  255, 99, 71)
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    if (estadoJuego === "ganaste") {
      text("¡Ganaste!", width / 2, height / 2 - 40);
    } else if (estadoJuego === "perdiste") {
      text("¡Perdiste!", width / 2, height / 2 - 40);
    }

    
    let botonReiniciarX = width / 2 - 75;
    let botonReiniciarY = height / 2 + 40;
    let botonReiniciarAncho = 150;
    let botonReiniciarAlto = 50;
    fill(111, 244, 147);
    rect(botonReiniciarX, botonReiniciarY, botonReiniciarAncho, botonReiniciarAlto, 10);
    fill(19, 21, 129);
    textSize(20);
    text("Reiniciar", botonReiniciarX + botonReiniciarAncho / 2, botonReiniciarY + botonReiniciarAlto / 2);


    if (
      mouseIsPressed &&
      mouseX > botonReiniciarX &&
      mouseX < botonReiniciarX + botonReiniciarAncho &&
      mouseY > botonReiniciarY &&
      mouseY < botonReiniciarY + botonReiniciarAlto
    ) {
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  estadoJuego = "inicio";
  puntos = 0;
  temporizador = new Temporizador(45);
  objetosCorrectos = [];
  objetosIncorrectos = [];
  for (let i = 0; i < 5; i++) {
    objetosCorrectos.push(new ObjetosCasa(random(2, 5)));
  }
  for (let i = 0; i < 5; i++) {
    objetosIncorrectos.push(new ObjetoIncorrecto(random(2, 5)));
  }
  sonido.stop();
}
