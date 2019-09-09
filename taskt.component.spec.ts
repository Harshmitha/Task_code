import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktComponent } from './taskt.component';

describe('TasktComponent', () => {
  let component: TasktComponent;
  let fixture: ComponentFixture<TasktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
