class Juego {
  constructor() {
    this.temporizador = new Temporizador(45);
    this.personaje = new Personaje();
    this.objetosCorrectos = [];
    this.objetosIncorrectos = [];
    this.puntos = 0;
    this.estadoJuego = "inicio";
    this.sonidoReproducido = false;

    this.inicializarObjetos();
  }

  inicializarObjetos() {
    this.objetosCorrectos = [];
    this.objetosIncorrectos = [];
    for (let i = 0; i < 5; i++) {
      this.objetosCorrectos.push(new ObjetosCasa(random(2, 5)));
    }
    for (let i = 0; i < 5; i++) {
      this.objetosIncorrectos.push(new ObjetoIncorrecto(random(2, 5)));
    }
  }

  reiniciarJuego() {
    this.estadoJuego = "inicio";
    this.puntos = 0;
    this.temporizador = new Temporizador(45);
    this.inicializarObjetos();
    sonidoFondo.stop();
    sonidoPerder.stop();
    sonidoGanar.stop();
  }

  dibujarInicio() {
    background(255, 99, 71);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("¡Es una reunión privada!", width / 2, height / 3);
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
      this.estadoJuego = "jugando";
      if (!sonidoFondo.isPlaying()) {
        sonidoFondo.loop();
      }
    }
  }

  dibujarJugando() {
    image(fondo, 0, 0);

    this.personaje.dibujar();
    this.personaje.moverConMouse();

    for (let obj of this.objetosCorrectos) {
      obj.dibujar();
      obj.actualizar();
      obj.reciclar();
      if (obj.colisionar(this.personaje)) {
        this.puntos++;
        sonidoPunto.play(); 
      }
    }

    for (let obj of this.objetosIncorrectos) {
      obj.dibujar();
      obj.actualizar();
      obj.reciclar();
      if (obj.colisionar(this.personaje)) {
        this.estadoJuego = "perdiste";
        sonidoFondo.stop();
        sonidoPerder.play(); 
      }
    }


    this.temporizador.actualizar();
    this.temporizador.mostrar();


    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Puntos: ${this.puntos}`, 10, 10);


    if (this.temporizador.tiempoRestante === 0) {
      if (this.puntos >= 200) {
        this.estadoJuego = "ganaste";
        sonidoFondo.stop();
        sonidoGanar.play();
      } else {
        this.estadoJuego = "perdiste";
        sonidoFondo.stop();
        sonidoPerder.play();
      }
    }
  }

  dibujarFin() {
    background(255, 99, 71);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    if (this.estadoJuego === "ganaste") {
      text("¡Ganaste!", width / 2, height / 2 - 40);
    } else if (this.estadoJuego === "perdiste") {
      text("¡Perdiste!", width / 2, height / 2 - 40);
    }

    let botonReiniciarX = width / 2 - 75;
    let botonReiniciarY = height / 2 + 40;
    let botonReiniciarAncho = 150;
    let botonReiniciarAlto = 50;
    fill(111, 244, 147);
    rect(
      botonReiniciarX,
      botonReiniciarY,
      botonReiniciarAncho,
      botonReiniciarAlto,
      10
    );
    fill(19, 21, 129);
    textSize(20);
    text(
      "Reiniciar",
      botonReiniciarX + botonReiniciarAncho / 2,
      botonReiniciarY + botonReiniciarAlto / 2
    );

    if (
      mouseIsPressed &&
      mouseX > botonReiniciarX &&
      mouseX < botonReiniciarX + botonReiniciarAncho &&
      mouseY > botonReiniciarY &&
      mouseY < botonReiniciarY + botonReiniciarAlto
    ) {
      this.reiniciarJuego();
    }
  }

  draw() {
    if (this.estadoJuego === "inicio") {
      this.dibujarInicio();
    } else if (this.estadoJuego === "jugando") {
      this.dibujarJugando();
    } else {
      this.dibujarFin();
    }
  }
}
