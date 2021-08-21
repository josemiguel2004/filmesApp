import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme02PageRoutingModule } from './filme02-routing.module';

import { Filme02Page } from './filme02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme02PageRoutingModule
  ],
  declarations: [Filme02Page]
})
export class Filme02PageModule {}
