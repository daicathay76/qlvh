import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongbanComponent } from './phongban.component';

describe('PhongbanComponent', () => {
  let component: PhongbanComponent;
  let fixture: ComponentFixture<PhongbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhongbanComponent]
    });
    fixture = TestBed.createComponent(PhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
