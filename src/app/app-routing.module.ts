import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  { path: 'first-component', component: FirstComponentComponent },
];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
