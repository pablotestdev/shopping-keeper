import { MercadoComponent } from './../componentes-internos/mercado/mercado.component';
import { UpNavigatorComponent } from './../componentes-internos/navigator/up-navigator/up-navigator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule
  ],
  declarations: [
    FavoritosPage,
    UpNavigatorComponent,
    MercadoComponent
  ]
})
export class FavoritosPageModule {}
