import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaireFormComponent } from './questionaire-form/questionaire-form.component';

const routes: Routes = [
  {path:'',component:QuestionaireFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
