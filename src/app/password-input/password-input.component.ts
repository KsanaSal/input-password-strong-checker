import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form = this.formBuilder.group({
    password:[null, [Validators.required]]
  })

  ngOnInit(): void {
  }

}
