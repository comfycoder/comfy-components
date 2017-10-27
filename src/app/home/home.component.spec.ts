import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { DynamicFormComponent } from '../question/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../question/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from '../question/question.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'error',
            component: HomeComponent
          }
        ]),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        QuestionService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have questions', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.questions).not.toBeNull();
    expect(app.questions.length > 0).toBeTruthy();
  }));

  // it(`should have as title 'Camp Comfy'`, async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Camp Comfy');
  // }));

  // it('should render title in a h2 tag', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('Welcome to Camp Comfy!');
  // }));
});
