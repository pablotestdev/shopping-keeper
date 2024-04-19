import { ContadorTotalComponent } from './../componentes-internos/contador-total/contador-total.component';
import { ProdutoCarrinhoComponent } from './../componentes-internos/product/produto-carrinho/produto-carrinho.component';
import { UpNavigatorComponent } from './../componentes-internos/navigator/up-navigator/up-navigator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule,
  ],
  declarations: [
    CarrinhoPage,
    UpNavigatorComponent,
    ProdutoCarrinhoComponent,
    ContadorTotalComponent
  ]
})
export class CarrinhoPageModule {}
