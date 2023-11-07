import { Component } from '@angular/core';
import { PeriodicElement } from 'src/app/Interface/PeriodicElement';

const ELEMENT_DATA: PeriodicElement[] = [
  {stt: 1, ma: 'HNV001', ten: 'Nguyễn Trần Đăng Hưng', chucdanh: 'Nhân viên ban chiến lược', phongban: 'Quản trị'},
  {stt: 2, ma: 'NTT002', ten: 'Trần thái Như', chucdanh: 'Tổ trưởng ban chiến lược', phongban: 'Quản trị'},
  {stt: 3, ma: 'TN001', ten: 'Nguyễn Thế Toàn', chucdanh: 'Trưởng khoa ngoại', phongban: 'Khoa ngoại tổng hợp'}
];
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss']
})
export class NhanvienComponent {
  displayedColumns: string[] = ['stt','ma', 'ten', 'chucdanh', 'phongban'];
  dataSource = ELEMENT_DATA;
}