import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklComponent } from './taskl.component';

describe('TasklComponent', () => {
  let component: TasklComponent;
  let fixture: ComponentFixture<TasklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
