import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme01PageRoutingModule } from './filme01-routing.module';

import { Filme01Page } from './filme01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme01PageRoutingModule
  ],
  declarations: [Filme01Page]
})
export class Filme01PageModule {}
