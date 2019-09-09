import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskrComponent } from './taskr.component';

describe('TaskrComponent', () => {
  let component: TaskrComponent;
  let fixture: ComponentFixture<TaskrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
