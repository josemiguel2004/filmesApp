import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme03PageRoutingModule } from './filme03-routing.module';

import { Filme03Page } from './filme03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme03PageRoutingModule
  ],
  declarations: [Filme03Page]
})
export class Filme03PageModule {}
