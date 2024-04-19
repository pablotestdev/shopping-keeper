
import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';






@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss'],
})
export class MercadoComponent implements  OnInit {
  @Input() nome_mercado;
  @Input() distancia;
  @Input() bairro;




  el: any;

  constructor(private element: ElementRef) {
    this.el = this.element.nativeElement
  }



  ngOnInit() {
    this.el.addEventListener('click', () => console.log('clicked'))

  }

  AfterViewInit() {


  }




}
