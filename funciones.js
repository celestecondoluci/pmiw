function cambiarFondo() {
  if (mousePressed && (mouseButton === LEFT)) {
    fill(0);
  } else if (mousePressed && (mouseButton === RIGHT)) {
    fill(0, 0, 99);
  }
  if (mouseX < 400) {
    stroke(0);
    fill(0, 0, 99);
  }
}

function colorLineas() {
  if (mouseX > 600) {
    linea = random(93, 280);
    return color(linea, 44, 99);
  } else if (mouseX < 600 && mouseX > 400) {
    linea = random(0, 70);
    return color(linea, 44, 99);
  } else {
    fill(0, 0, 99);
    return color(0);
  }
}

function tamañoLineas(tamMin, tamMax) {
  return map(mouseY, 0, width, tamMin, tamMax);
}

function dibujarRectangulos(cant, tam, anchoMax, menor) {
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      strokeWeight(tam);
      for (let k = 0; k < 5; k++) {
        let tamañoRec = anchoMax - (menor * k);
        rect(i * 67, j * 67, tamañoRec, tamañoRec);
      }
    }
  }
}
