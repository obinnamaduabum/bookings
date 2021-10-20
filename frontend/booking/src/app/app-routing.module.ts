import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AttractionComponent} from './components/attraction/attraction.component';

const routes: Routes = [
  { path: '',   component: AttractionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
