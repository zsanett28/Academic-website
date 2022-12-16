import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingHoursComponent } from './consulting-hours.component';

describe('TutorActivityComponent', () => {
  let component: ConsultingHoursComponent;
  let fixture: ComponentFixture<ConsultingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
