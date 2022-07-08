import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadMoreListPageRoutingModule } from './load-more-list-routing.module';

import { LoadMoreListPage } from './load-more-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadMoreListPageRoutingModule
  ],
  declarations: [LoadMoreListPage]
})
export class LoadMoreListPageModule {}
