import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme05Page } from './filme05.page';

const routes: Routes = [
  {
    path: '',
    component: Filme05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme05PageRoutingModule {}
