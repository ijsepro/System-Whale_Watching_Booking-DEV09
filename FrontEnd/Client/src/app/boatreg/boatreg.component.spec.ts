import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatregComponent } from './boatreg.component';

describe('BoatregComponent', () => {
  let component: BoatregComponent;
  let fixture: ComponentFixture<BoatregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
