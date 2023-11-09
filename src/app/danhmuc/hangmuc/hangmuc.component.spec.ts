import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmucComponent } from './hangmuc.component';

describe('HangmucComponent', () => {
  let component: HangmucComponent;
  let fixture: ComponentFixture<HangmucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmucComponent]
    });
    fixture = TestBed.createComponent(HangmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
