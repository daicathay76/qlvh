import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhongbanComponent } from './danhmuc/phongban/phongban.component';
import { ChucvuComponent } from './danhmuc/chucvu/chucvu.component';
import { NhanvienComponent } from './danhmuc/nhanvien/nhanvien.component';


const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "danhmuc/phongban", component: PhongbanComponent
  },
  {
    path: "danhmuc/chucvu", component: ChucvuComponent
  },
  {
    path: "danhmuc/nhanvien", component: NhanvienComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
