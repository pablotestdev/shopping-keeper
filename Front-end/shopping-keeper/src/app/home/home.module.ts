import { MercadoComponent } from './../componentes-internos/mercado/mercado.component';
import { SearchBarComponent } from './../componentes-internos/search-bar/search-bar.component';
import { TabsNavigatorComponent } from './../componentes-internos/tabs-navigator/tabs-navigator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TabsNavigatorComponent,
    SearchBarComponent,
    MercadoComponent
  ]
})
export class HomePageModule {}
