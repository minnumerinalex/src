import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireFormComponent } from './questionaire-form.component';

describe('QuestionaireFormComponent', () => {
  let component: QuestionaireFormComponent;
  let fixture: ComponentFixture<QuestionaireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
