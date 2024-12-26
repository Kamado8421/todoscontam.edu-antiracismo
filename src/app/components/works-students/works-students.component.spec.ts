import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksStudentsComponent } from './works-students.component';

describe('WorksStudentsComponent', () => {
  let component: WorksStudentsComponent;
  let fixture: ComponentFixture<WorksStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
