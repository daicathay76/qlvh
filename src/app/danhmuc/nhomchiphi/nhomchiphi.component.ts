import { Component } from '@angular/core';
import { PeriodicElement, nhomchiphi } from 'src/app/Interface/PeriodicElement';


const ELEMENT_DATA: nhomchiphi[] = [
  { ma: 1, ten: 'Bảo trì' },
  { ma: 2, ten: 'Kiểm định' },
  { ma: 3, ten: 'Sửa chữa' },
  { ma: 4, ten: 'Mua sắm' },
  { ma: 5, ten: 'Hoạt động' }
];

@Component({
  selector: 'app-nhomchiphi',
  templateUrl: './nhomchiphi.component.html',
  styleUrls: ['./nhomchiphi.component.scss']
})
export class NhomchiphiComponent {
  displayedColumns: string[] = ['ma', 'ten'];
  dataSource = ELEMENT_DATA;
}