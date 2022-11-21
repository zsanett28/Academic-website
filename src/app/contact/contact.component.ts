import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  displayStyle: string = "none";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFeedbackForm();
  }

  createFeedbackForm() {
    this.feedbackForm = this.formBuilder.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit() {
    this.displayStyle = "block";
    this.feedbackForm.reset();
  }

}
