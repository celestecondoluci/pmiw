// Maria Celeste Condoluci
// https://www.youtube.com/watch?v=7QmF5KIRpbg
let imagenes = [];
let pantalla;
let guion;
let sonido_llamada;
let sonido_policia;

function preload() {
  guion = loadTable("/data/guion.csv", 'csv', 'header');
  sonido_llamada = loadSound('/data/llamada.mp3');
  sonido_policia = loadSound('/data/sirena-policia.mp3')
    for (let i = 0; i < 16; i++) {
    imagenes[i] = loadImage("data/imagen_" + i + ".jpeg");
  }
}


function setup() {
  createCanvas(640, 480);
  pantalla = 0;
  for (let i = 0; i < 16; i++) {
    imagenes[i].resize(640, 480);
  }
}



function draw() {
  if (pantalla == 0 ) {
    background(  255, 99, 71)
      fill(  144, 238, 144)
      textSize(20);
    text("CANDACE FIESTA", 215, 240);
    textSize(14)
      text("Maria Celeste Condoluci - Ema Della Loggia", 170, 255);
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 1) {
    image(imagenes[0], 0, 0);
    fill(255)
      rect(30, 20, 420, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_1');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 2) {
    image(imagenes[1], 0, 0);
    fill(255)
      rect(30, 20, 310, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_2');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 3) {
    image(imagenes[2], 0, 0);
    fill(255)
      rect(30, 20, 250, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_3');
    dibujarBoton(117, 403, 50, 50, "SI", 135, 430);
    dibujarBoton(400, 403, 50, 50, "NO", 416, 430);
  }

  if (pantalla === 4) {
    image(imagenes[3], 0, 0);
    fill(255)
      rect(30, 20, 330, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_4');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 5) {
    image(imagenes[4], 0, 0);
    fill(255)
      rect(30, 20, 200, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_5');
    dibujarBoton(117, 403, 85, 50, "ATENDER", 132, 430);
    dibujarBoton(400, 403, 85, 50, "IGNORAR", 414, 430);

    if (!sonido_llamada.isPlaying()) {
      sonido_llamada.play();
    }
  } else {
    if (sonido_llamada.isPlaying()) {
      sonido_llamada.stop();
    }
  }

  if (pantalla === 6) {
    image(imagenes[5], 0, 0);
    fill(255)
      rect(30, 20, 220, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_6');
    dibujarBoton(70, 403, 168, 50, "'Esta solo Stacy y Jeremy'", 75, 428);
    dibujarBoton(400, 403, 168, 50, "'Lo lamento, se descontrolo \ny vino mas gente'", 412, 422);
  }

  if (pantalla === 7) {
    image(imagenes[4], 0, 0);
    fill(255)
      rect(30, 20, 100, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_7');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 8) {
    image(imagenes[7], 0, 0);
    fill(255)
      rect(30, 20, 100, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_8');
    dibujarBoton(400, 403, 80, 40, "Reiniciar", 415, 425);
  }

  if ( pantalla === 9) {
    image(imagenes[8], 0, 0);
    fill(255)
      rect(30, 20, 360, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_9');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 10) {
    image(imagenes[9], 0, 0);
    fill(255)
      rect(30, 20, 160, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_10');
    dibujarBoton(70, 403, 85, 50, "Los deja tocar", 75, 428);
    dibujarBoton(400, 403, 98, 50, "No los deja tocar", 406, 428);
  }

  if (pantalla === 11) {
    image(imagenes[10], 0, 0);
    fill(255)
      rect(30, 20, 360, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_11');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 12 ) {
    image(imagenes[11], 0, 0);
    fill(255)
      rect(30, 20, 140, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_12');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 13 ) {
    image(imagenes[3], 0, 0);
    fill(255)
      rect(30, 20, 130, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_13');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 14 ) {
    image(imagenes[12], 0, 0);
    fill(255)
      rect(30, 20, 305, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_14');
    dibujarBoton(400, 403, 80, 40, "Reiniciar", 415, 425);

    if (!sonido_policia.isPlaying()) {
      sonido_policia.play();
    }
  } else {
    if (sonido_policia.isPlaying()) {
      sonido_policia.stop();
    }
  }


  if (pantalla === 15) {
    image(imagenes[13], 0, 0);
    fill(255)
      rect(30, 20, 165, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_15');
    text("tocar la flecha derecha para continuar", 60, 470);
  }

  if (pantalla === 16) {
    image(imagenes[14], 0, 0);
    fill(255)
      rect(30, 20, 245, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_16');
    dibujarBoton(400, 403, 80, 40, "Reiniciar", 415, 425);
  }


  if ( pantalla === 17) {
    image(imagenes[15], 0, 0);
    fill(255)
      rect(30, 20, 170, 35);
    fill(0)
      DialogosCSV(20, 12, 'pantalla_17');
    dibujarBoton(400, 403, 80, 40, "Reiniciar", 415, 425);
  }
}




function keyPressed() {
  if (pantalla !== 3 && pantalla !== 5 && pantalla !== 6 && pantalla !== 10 && pantalla !== 14 && pantalla !== 16 && pantalla !== 17 && pantalla !== 8) { // Evitar avanzar con flecha sin responder
    if (keyCode === RIGHT_ARROW) {
      if (pantalla === 11) {
        pantalla = 5; // Redirige a pantalla 5
      } else {
        pantalla += 1;
      }
    }
  }
}

function mousePressed() {
  // Si está en la pantalla 3
  if (pantalla === 3) {
    // Botón SI redirige a la pantalla 4
    if (mouseSobreBoton(117, 403, 50, 50)) {
      pantalla = 4;
    }
    // Botón NO redirige a la pantalla 9
    else if (mouseSobreBoton(400, 403, 50, 50)) {
      pantalla = 9;
    }
  }

  // Si está en la pantalla 5
  else if (pantalla === 5) {
    // Botón ATENDER redirige a la pantalla 6
    if (mouseSobreBoton(117, 403, 85, 50)) {
      pantalla = 6;
    }
    // Botón IGNORAR redirige a la pantalla 15
    else if (mouseSobreBoton(400, 403, 85, 50)) {
      pantalla = 15;
    }
  }

  // Si está en la pantalla 6
  else if (pantalla === 6) {
    // Botón 'Esta solo Stacy y Jeremy' redirige a la pantalla 7
    if (mouseSobreBoton(70, 403, 168, 50)) {
      pantalla = 7;
    }
    // Botón 'Lo lamento...'
    else if (mouseSobreBoton(400, 403, 168, 50)) {
      pantalla = 17
    }
  } else if (pantalla === 10) {
    //los deja tocar
    if (mouseSobreBoton(70, 403, 85, 50)) {
      pantalla =11;
    }

    //no los deja tocar
    if (mouseSobreBoton(400, 403, 98, 50)) {
      pantalla = 12
    }
  }
  //reinicar
  else if ( pantalla === 8 || pantalla == 14 || pantalla === 16 || pantalla === 17) {
    if (mouseSobreBoton(400, 403, 80, 40)) {
      pantalla = 1
    }
  }
}
