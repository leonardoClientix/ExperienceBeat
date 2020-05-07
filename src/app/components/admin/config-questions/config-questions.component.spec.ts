import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigQuestionsComponent } from './config-questions.component';

describe('ConfigQuestionsComponent', () => {
  let component: ConfigQuestionsComponent;
  let fixture: ComponentFixture<ConfigQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
