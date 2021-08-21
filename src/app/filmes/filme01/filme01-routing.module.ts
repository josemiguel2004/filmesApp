import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme01Page } from './filme01.page';

const routes: Routes = [
  {
    path: '',
    component: Filme01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme01PageRoutingModule {}
