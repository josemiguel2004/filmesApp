import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme04PageRoutingModule } from './filme04-routing.module';

import { Filme04Page } from './filme04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme04PageRoutingModule
  ],
  declarations: [Filme04Page]
})
export class Filme04PageModule {}
