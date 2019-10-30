import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateGpa } from './validators/valid-gpa.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  gpa = new FormControl('', [Validators.required, ValidateGpa]);
  constructor() {}

  ngOnInit() {
  }
}
