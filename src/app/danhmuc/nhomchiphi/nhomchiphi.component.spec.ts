import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomchiphiComponent } from './nhomchiphi.component';

describe('NhomchiphiComponent', () => {
  let component: NhomchiphiComponent;
  let fixture: ComponentFixture<NhomchiphiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhomchiphiComponent]
    });
    fixture = TestBed.createComponent(NhomchiphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
