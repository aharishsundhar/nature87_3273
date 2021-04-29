import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplantsComponent } from './addplants.component';

describe('AddplantsComponent', () => {
  let component: AddplantsComponent;
  let fixture: ComponentFixture<AddplantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});