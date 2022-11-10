import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaThesisComponent } from './diploma-thesis.component';

describe('DiplomaThesisComponent', () => {
  let component: DiplomaThesisComponent;
  let fixture: ComponentFixture<DiplomaThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomaThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
