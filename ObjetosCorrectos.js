class ObjetosCasa {
  constructor(velocidad) {
    this.x = Math.random() * 640;
    this.y = -100;
    this.diam = random(30, 45); 
    this.vel = velocidad;
    this.img = random(correctosImg);
  }

  dibujar() {
   image(this.img, this.x, this.y, this.diam, this.diam);
  }

  actualizar() {
    this.y = this.y + this.vel;
  }

  reciclar() {
 if (this.y >= 480 + 100) {
      this.x = Math.random() * 640 ;
      this.y = -100;
    }
  }

  colisionar(p) {
      return dist(this.x + this.diam / 2, this.y + this.diam / 2, p.x + 70, p.y + 70) < 50;
  }
}
