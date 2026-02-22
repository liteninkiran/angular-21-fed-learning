import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  imports: [FormField, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  public loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 5, { message: 'Password must be at least 5 charactors' });
    maxLength(schemaPath.password, 10, { message: 'Password is too long' });
  });

  public onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginModel());
  }
}
