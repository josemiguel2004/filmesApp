import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme03Page } from './filme03.page';

const routes: Routes = [
  {
    path: '',
    component: Filme03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme03PageRoutingModule {}
