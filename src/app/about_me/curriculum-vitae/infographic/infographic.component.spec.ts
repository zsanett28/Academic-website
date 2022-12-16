import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicComponent } from './infographic.component';

describe('CurriculumVitaeComponent', () => {
  let component: InfographicComponent;
  let fixture: ComponentFixture<InfographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
