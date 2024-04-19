import { VisualizarPedidoComponent } from './../componentes-internos/visualizar-pedido/visualizar-pedido.component';
import { UpNavigatorComponent } from './../componentes-internos/navigator/up-navigator/up-navigator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

import { PedidosPage } from './pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule
  ],
  declarations: [
    PedidosPage,
    UpNavigatorComponent,
    VisualizarPedidoComponent
  ]
})
export class PedidosPageModule {}
