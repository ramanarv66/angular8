import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

const routes: Routes = [
  {path:'create', component:CreateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
