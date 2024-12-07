
class Temporizador {
  constructor(duracion) {
    this.duracion = duracion; 
    this.tiempoRestante = duracion; 
    this.inicio = millis(); 
  }

  actualizar() {
    let tiempoTranscurrido = (millis() - this.inicio) / 1000;
    this.tiempoRestante = max(0, this.duracion - tiempoTranscurrido); 
  }

  mostrar() {
    fill(255);
    textSize(16);
    textAlign(RIGHT, TOP);
    text(`Tiempo: ${ceil(this.tiempoRestante)}s`, width - 10, 10);
  }
  
 
}
