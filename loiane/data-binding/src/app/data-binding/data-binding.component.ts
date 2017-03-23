import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';


  cursoAngular: boolean = true;

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  isMouseOver = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('Botao clicado!');
  }

  onKeyup(event:KeyboardEvent) {
    console.log(event);
  }

  onSave(valor:string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
