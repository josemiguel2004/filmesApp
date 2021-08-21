import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filme01',
    loadChildren: () => import('./filmes/filme01/filme01.module').then( m => m.Filme01PageModule)
  },
  {
    path: 'filme02',
    loadChildren: () => import('./filmes/filme02/filme02.module').then( m => m.Filme02PageModule)
  },
  {
    path: 'filme03',
    loadChildren: () => import('./filmes/filme03/filme03.module').then( m => m.Filme03PageModule)
  },
  {
    path: 'filme04',
    loadChildren: () => import('./filmes/filme04/filme04.module').then( m => m.Filme04PageModule)
  },
  {
    path: 'filme05',
    loadChildren: () => import('./filmes/filme05/filme05.module').then( m => m.Filme05PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
