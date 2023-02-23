import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css'],
})
export class PasswordStrengthBarComponent {
  @Input()
  force: number = 0;
}
