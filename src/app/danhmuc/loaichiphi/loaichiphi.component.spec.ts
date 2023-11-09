import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaichiphiComponent } from './loaichiphi.component';

describe('LoaichiphiComponent', () => {
  let component: LoaichiphiComponent;
  let fixture: ComponentFixture<LoaichiphiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaichiphiComponent]
    });
    fixture = TestBed.createComponent(LoaichiphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
