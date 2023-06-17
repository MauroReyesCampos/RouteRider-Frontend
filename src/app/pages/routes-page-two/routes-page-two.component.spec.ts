import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesPageTwoComponent } from './routes-page-two.component';

describe('RoutesPageTwoComponent', () => {
  let component: RoutesPageTwoComponent;
  let fixture: ComponentFixture<RoutesPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
