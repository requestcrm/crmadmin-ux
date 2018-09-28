import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { Fullfillmentbean } from './fullfillmentbean';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  statusCode: string;
  emailStatusCode: number;
  email: string;
  isEmailBodyGenerated:boolean = true;
  isEmailSent:boolean = false;

  showPreview:boolean = false;
  enableCreateCRMButton: boolean = true;

  ngOnInit() {
  }

  fullFillmentForm = new FormGroup({
      company: new FormControl(),
      order: new FormControl(),
      fname: new FormControl(),
      lname: new FormControl(),
      zip: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      emailBody: new FormControl()
   });

   //Create constructor to get service instance
   constructor(private adminService: AdminService) {
   }

  onFormSubmit (){
    this.isEmailBodyGenerated = false;
    this.isEmailSent = false;
    this.showPreview = true;

    let fullFillmentFormPost = this.fullFillmentForm.value;


   //call service class to http post
   this.adminService.initiateCFrequest(fullFillmentFormPost)
			  .subscribe(res => {
          this.email = res;
          if(this.email!=null){
            this.statusCode = "200";
          }
          this.isEmailBodyGenerated = true;
  			 });
		}

    //start call to email
    sendEmailFor(email:String){
        this.fullFillmentForm.patchValue({
          emailBody: email
        });
        let postEmailData = this.fullFillmentForm.value;

        console.log("post data : " + JSON.stringify(postEmailData));
        //start-subscribe
              this.adminService.sendEmailFor(postEmailData)
              .subscribe(successCode => {
                this.emailStatusCode = successCode;
                if(this.emailStatusCode = "200"){
                    this.isEmailSent = true;
                }

                this.showPreview = false;
               });
        //end subscribe
    }
    //end-start call to email

} //end of class
