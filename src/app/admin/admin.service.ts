import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

import { Fullfillmentbean } from './fullfillmentbean';

@Injectable()
export class AdminService {

  postUrl  =  environment.cfpostUrl;
  emailUrl =  environment.emailUrl;

  constructor(private http:Http) {
	}

  initiateCFrequest(fullfillmentbean: Fullfillmentbean):Observable<string> {
	      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.postUrl, fullfillmentbean, options)
               .map( (response: Response) => response.text())
               ;
   }

  //start of send-mail
  sendEmailFor(postEmailData: Fullfillmentbean):Observable<number> {
	      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.emailUrl, postEmailData, options)
               .map(success => success.status)
               ;
  }
  //end of send-mail

}
