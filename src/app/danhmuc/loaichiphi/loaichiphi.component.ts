import { Component } from '@angular/core';
import { PeriodicElement, loaichiphi } from 'src/app/Interface/PeriodicElement';

const ELEMENT_DATA: loaichiphi[] = [
  { ma: 1, ten: 'Chi phí bảo trì TBYT', nhom: 'Bảo trì' },
  { ma: 2, ten: 'Chi phí kiểm định, hiệu chuẩn TBYT', nhom: 'Kiểm định' },
  { ma: 3, ten: 'Chi phí sửa chữa TBYT', nhom: 'Sửa chữa' },
  { ma: 4, ten: 'Chi phí mua sắm TBYT', nhom: 'Mua sắm' },
  { ma: 5, ten: 'Chi phí bảo trì TSCĐ', nhom: 'Bảo trì' },
  { ma: 6, ten: 'Chi phí kiểm định, hiệu chuẩn TSCĐ', nhom: 'Kiểm định' },
  { ma: 7, ten: 'Chi phí sửa chữa TSCĐ', nhom: 'Sửa chữa' },
  { ma: 8, ten: 'Chi phí mua sắm TSCĐ', nhom: 'Mua sắm' },
  { ma: 9, ten: 'Chi phí mua sắm CCDC quản lý < 30tr', nhom: 'Mua sắm' },
  { ma: 10, ten: 'Chi phí mua sắm CCDC y tế < 30tr', nhom: 'Mua sắm' },
  { ma: 11, ten: 'Chi phí truyền hình cáp', nhom: 'Hoạt động' },
  { ma: 12, ten: 'Chi phí điện, nước, nhiên liệu, oxy', nhom: 'Hoạt động' },
  { ma: 13, ten: 'Hệ thống khí y tế', nhom: 'Hoạt động' },
  { ma: 14, ten: 'Chi phí cải tạo', nhom: 'Sửa chữa' },
  { ma: 15, ten: 'Chi phí dịch vụ thuê ngoài', nhom: 'Hoạt động' },
  { ma: 16, ten: 'Chi phí quản lý môi trường', nhom: 'Hoạt động' },
  { ma: 17, ten: 'Chi phí bảo hiểm', nhom: 'Hoạt động' },
  { ma: 18, ten: 'Chi phí hoạt động hằng ngày', nhom: 'Hoạt động' },
  { ma: 19, ten: 'Chi phí bảng biểu, decal', nhom: 'Hoạt động' }
]

@Component({
  selector: 'app-loaichiphi',
  templateUrl: './loaichiphi.component.html',
  styleUrls: ['./loaichiphi.component.scss']
})
export class LoaichiphiComponent {
  displayedColumns: string[] = ['ma', 'ten', 'nhom'];
  dataSource = ELEMENT_DATA;
}
