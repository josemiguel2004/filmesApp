import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme02Page } from './filme02.page';

const routes: Routes = [
  {
    path: '',
    component: Filme02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme02PageRoutingModule {}
