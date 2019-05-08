import { FeedbackService } from './feedback.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(public feedback: FeedbackService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.feedbackForm = new FormGroup({
      feedback: new FormControl('', Validators.required)
    });
  }

  public onFeedback() {
    console.log(this.feedbackForm.value);
    this.feedback.addFeedback(this.feedbackForm.value.feedback);
  }

}
