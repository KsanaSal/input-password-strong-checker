import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordInputComponent,
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};
  form: FormGroup;

  isShowPassword = false;
  force = 0;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
    });
    this.form.valueChanges.subscribe((value) => {
      this.onChange(value.password);
    });
  }

  onChangeInput(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    this.form.setValue({ password });
    this.onChange(password);
    this.force = this.passwordStrength(this.form.controls['password'].value);
  }
  writeValue(value: string): void {
    if (value) {
      this.form.setValue({ password: value });
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  showPassword(inputField: HTMLInputElement) {
    if (inputField.type === 'password') {
      this.isShowPassword = true;
      inputField.type = 'text';
    } else {
      this.isShowPassword = false;
      inputField.type = 'password';
    }
  }

  private passwordStrength(password: string) {
    if (password.length < 8) {
      return 0;
    }
    const letters = /[A-Za-z]/.test(password);
    const numbers = /[0-9]/.test(password);
    const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
    const array = [letters, numbers, symbols];

    return array.filter((el) => el).length;
  }
}
