import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermspoliciesComponent } from './termspolicies.component';

describe('TermspoliciesComponent', () => {
  let component: TermspoliciesComponent;
  let fixture: ComponentFixture<TermspoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermspoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermspoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
