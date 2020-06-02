import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { };
  
  submitFeedback(feedback: Feedback): Observable<Feedback>{
    const HttpOptions = {
      headers:new HttpHeaders({
        'Content-Type' : 'application/json' 
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback', feedback, HttpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError);
  }
}
