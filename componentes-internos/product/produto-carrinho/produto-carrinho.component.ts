import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-produto-carrinho',
  templateUrl: './produto-carrinho.component.html',
  styleUrls: ['./produto-carrinho.component.scss'],
})
export class ProdutoCarrinhoComponent implements OnInit {
  @Input() id: number;
  @Input() description: any;
  @Input() base_price: number;


  public quantity: number = 1;
  public total_price: number;

  constructor() {}

  IncreaseQuantity(): void {
    this.quantity += 1


  }

  DecreaseQuantity(): void {
    if((this.base_price * this.quantity) - this.base_price >= 0 ) this.quantity -= 1

  }



  ngOnInit() {

  }

}
