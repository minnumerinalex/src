import { Injectable } from '@angular/core';

enum code {
in_progress,
completed,
amended,
entered_in_error,
stopped,
active

}
enum author{
  device="Device",
  practitioner="Practitioner",
  practitionerRole="PractitionerRole",
  patient="Patient",
  relatedPerson="RelatedPerson",
  organization="Organization"
}
@Injectable({
  providedIn: 'root'
})

export class ResponseResourceService {
  response:any;
  constructor() {
   
   }
   ngOnInit() {
   
   }
   getResourceResponse(id: any,dateAnswered: any,auther:string,source:string,item:any)
   {
    this.response={
      "resourceType" : "QuestionnaireResponse",
      "identifier" : id, // Unique id for this set of answers
      
      "basedOn" : "ServiceRequest", // Request fulfilled by this QuestionnaireResponse
      "partOf" :"Observation", // Part of this action
      "questionnaire" : "Questionnaire", // Form being answered
      "status" : "<code>", // R!  in-progress | completed | amended | entered-in-error | stopped
      "subject" : "Questionnaire", // The subject of the questions
      "encounter" :"Encounter", // Encounter created as part of
      "authored" :dateAnswered, // Date the answers were gathered
      "author" : auther, // Person who received and recorded the answers
      "source" : source, // The person who answered the questions
      "item" : item
    };
    return this.response;
   }
}
