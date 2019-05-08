import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public http: HttpClient, private router: Router) { }

  addFeedback(feedback: string) {
    let feed_back = feedback;
    const feedArr = {feedback: feed_back}; debugger;
    console.log(feedArr);
    this.http.post<{message: string, post_id: any}>('http://localhost:3000/feed/addFeedback', feedArr)
    .subscribe(response => {
      console.log(response.message + ' ' + response.post_id);
      console.log('Thank you for your feedback!');
      this.router.navigate(['/home']);
    });
  }
}
