/*
Copyright 2019 Joyce Emanuele, Wellington Cesar
This file is part of AFD.
*/

let larg = 30;

class Fita {
  constructor(c) {
    this.cadeia = c;
    this.atual = 0;
  }
  reiniciar(c) {
  	if(c) this.cadeia = c;
  	this.atual = 0;
  }

  mostrar() {
    noStroke();
    fill(36, 123, 160);
    rect(0, height - 100, width, 100);
    fill(0);
    text(this.cadeia, width / 2 - larg * this.atual - larg * 0.59, height - 50);
    strokeWeight(3);
    stroke(255, 22, 84);
    line(width / 2 - larg / 2 - 3, height -100, width / 2 - larg / 2 - 3, height);
    line(width / 2 + larg / 2 - 3, height -100, width / 2 + larg / 2 - 3, height);
  }
  passo() {
    this.atual ++;
    if(this.atual === this.cadeia.length) {
    	rodando = false;
    	aut.termino(true);
    }
  }
  letra() {
    return this.cadeia.charAt(this.atual);
  }
}