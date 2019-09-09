import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmComponent } from './taskm.component';

describe('TaskmComponent', () => {
  let component: TaskmComponent;
  let fixture: ComponentFixture<TaskmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
