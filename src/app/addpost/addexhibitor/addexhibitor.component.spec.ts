import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexhibitorComponent } from './addexhibitor.component';

describe('AddexhibitorComponent', () => {
  let component: AddexhibitorComponent;
  let fixture: ComponentFixture<AddexhibitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexhibitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexhibitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
