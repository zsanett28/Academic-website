import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorActivityComponent } from './tutor-activity.component';

describe('TutorActivityComponent', () => {
  let component: TutorActivityComponent;
  let fixture: ComponentFixture<TutorActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
