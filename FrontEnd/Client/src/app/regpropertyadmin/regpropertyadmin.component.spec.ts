import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpropertyadminComponent } from './regpropertyadmin.component';

describe('RegpropertyadminComponent', () => {
  let component: RegpropertyadminComponent;
  let fixture: ComponentFixture<RegpropertyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpropertyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpropertyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
