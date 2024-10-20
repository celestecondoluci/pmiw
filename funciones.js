function DialogosCSV(posX, posY, _id) {

  push();
  translate(posX, posY);
  text(ObtenerCSV(_id, 'texto'), 20, 30);
  pop();
}

function ObtenerCSV(_id, _columna) {
  let IDColumna = guion.getColumn('id');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id) {
      return guion.getColumn(_columna)[fila];
    }
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}

function dibujarBoton(x, y, ancho, alto, texto, textoX, textoY) {
  fill(0)
  rect(x, y, ancho, alto);
  fill(255)
  text(texto, textoX, textoY);
}

function mouseSobreBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
