
class Personaje {
    constructor() {
    this.x = 640 / 2;
    this.y = 480 - 100;
  }

  dibujar() {
    image(personajeImg, this.x, this.y, 140, 140);
  }

  moverConMouse() {
    if (mouseX < 0) {
      this.x = 0;
    } else if (mouseX > 640 - 140) {
      this.x = 640 - 140; 
    } else {
      this.x = mouseX;
    }
  
}
}
