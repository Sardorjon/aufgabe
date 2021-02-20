import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';

const routes: Routes = [
  { path: 'devices/:id', component: ItemViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
