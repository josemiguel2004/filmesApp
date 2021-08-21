import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme05PageRoutingModule } from './filme05-routing.module';

import { Filme05Page } from './filme05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme05PageRoutingModule
  ],
  declarations: [Filme05Page]
})
export class Filme05PageModule {}
