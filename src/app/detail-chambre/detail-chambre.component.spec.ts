import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChambreComponent } from './detail-chambre.component';

describe('DetailChambreComponent', () => {
  let component: DetailChambreComponent;
  let fixture: ComponentFixture<DetailChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
