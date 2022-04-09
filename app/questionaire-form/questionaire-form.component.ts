import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DatePipe, formatDate } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ResponseResourceService } from "../response-resource.service";

@Component({
  selector: "app-questionaire-form",
  templateUrl: "./questionaire-form.component.html",
  styleUrls: ["./questionaire-form.component.css"],
})

// Intermediate Tasks:
// Generate a questionnaire view. In the view, dynamically generate a form and capture the
// answer for the following questions 
export class QuestionaireFormComponent implements OnInit {
  questioaireForm!: FormGroup;
  dynamicFormArray: any;
  reviewData: any;
  showArray: boolean = false;
  loadSubmit: boolean = false;
  item:[] | undefined;
  dateAnswered :string;
  constructor(private httpClient: HttpClient,
     private fb: FormBuilder,
     //private datePipe: DatePipe,
     private resourceService:ResponseResourceService) {
      this.dateAnswered= formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  ngOnInit(): void {
    this.questioaireForm = this.fb.group({});

    this.httpClient.get("/assets/questionnaire.json").subscribe((data) => {
      this.dynamicFormArray = data;
      this.createFormControl();
      this.loadSubmit = true;
    });
  }
  onClickSubmit(data: any) {
    this.reviewData = this.questioaireForm.controls;
    this.dynamicFormArray?.item.forEach((element: { text: string }) => {
        console.log( this.questioaireForm.get(element.text)?.value);
    });
    console.log(this.reviewData );
    this.showArray = true;
    
    //get resource response;
    const id=this.dynamicFormArray.id;
    const auther=this.dynamicFormArray.subjectType[1];
    const source=this.dynamicFormArray.subjectType[1];
    console.log(this.resourceService.getResourceResponse(id,this.dateAnswered,auther,source,this.dynamicFormArray.item));
  }
  createFormControl() {
    this.dynamicFormArray?.item.forEach((element: { text: string }) => {
      this.questioaireForm?.addControl(
        element.text,
        new FormControl("", Validators.required)
      );
    });
  }
}


