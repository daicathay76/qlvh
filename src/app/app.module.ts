import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { NhanvienComponent } from './danhmuc/nhanvien/nhanvien.component';
import { PhongbanComponent } from './danhmuc/phongban/phongban.component';
import { ChucvuComponent } from './danhmuc/chucvu/chucvu.component';
import { LoaichiphiComponent } from './danhmuc/loaichiphi/loaichiphi.component';
import { NhomchiphiComponent } from './danhmuc/nhomchiphi/nhomchiphi.component';
import { HangmucComponent } from './danhmuc/hangmuc/hangmuc.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NhanvienComponent,
    PhongbanComponent,
    ChucvuComponent,
    LoaichiphiComponent,
    NhomchiphiComponent,
    HangmucComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
