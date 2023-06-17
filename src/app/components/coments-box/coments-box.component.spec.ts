import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsBoxComponent } from './coments-box.component';

describe('ComentsBoxComponent', () => {
  let component: ComentsBoxComponent;
  let fixture: ComponentFixture<ComentsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentsBoxComponent]
    });
    fixture = TestBed.createComponent(ComentsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
