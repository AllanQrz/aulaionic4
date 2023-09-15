import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'iframe',
    loadChildren: () => import('./page/iframe/iframe.module').then( m => m.IframePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./page/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./page/badge/badge.module').then( m => m.BadgePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
