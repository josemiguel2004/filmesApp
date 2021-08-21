import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme04Page } from './filme04.page';

const routes: Routes = [
  {
    path: '',
    component: Filme04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme04PageRoutingModule {}
