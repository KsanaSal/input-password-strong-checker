import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css'],
})
export class PasswordStrengthBarComponent implements OnChanges {
  @Input() passwordToRead!: string | null | undefined;
  constructor() {}

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

  ngOnChanges(changes: SimpleChanges): void {
    const password = changes['passwordToRead'].currentValue;
    this.passwordStrength(password);
  }
}
