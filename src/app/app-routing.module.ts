import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-posts',
    loadChildren: () => import('./Pages/list-posts/list-posts.module').then( m => m.ListPostsPageModule)
  },
  {
    path: 'list-item',
    loadChildren: () => import('./Pages/list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'load-more-list',
    loadChildren: () => import('./Pages/load-more-list/load-more-list.module').then( m => m.LoadMoreListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
