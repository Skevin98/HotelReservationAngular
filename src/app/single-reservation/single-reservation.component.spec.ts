import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReservationComponent } from './single-reservation.component';

describe('SingleReservationComponent', () => {
  let component: SingleReservationComponent;
  let fixture: ComponentFixture<SingleReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
