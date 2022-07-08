import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadMoreListPage } from './load-more-list.page';

const routes: Routes = [
  {
    path: '',
    component: LoadMoreListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadMoreListPageRoutingModule {}
