import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "pagenotfound", component: PagenotfoundComponent
  },
  {
    path: "danhmuc", component: DanhmucComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
