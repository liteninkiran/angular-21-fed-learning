import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, CommonModule],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
  public loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  public loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required.' });
    email(schemaPath.email, { message: 'Enter a valid email address.' });
    required(schemaPath.password, { message: 'Password is required.' });
    minLength(schemaPath.password, 5, { message: 'Password must be at least 5 charactors.' });
    maxLength(schemaPath.password, 10, { message: 'Password is too long.' });
  });

  public onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginModel());
  }

  public setForm() {
    this.loginModel.set({
      email: 'fed@gmail.com',
      password: 'fed1234',
    });
  }

  public resetForm() {
    this.loginModel.set({
      email: '',
      password: '',
    });
  }

  public updateForm() {
    this.loginForm.email().value.set('fedlearning@gmail.com');
    this.loginForm.password().value.set('fed123');
  }

  public updateEmailForm(newEmail: string) {
    this.loginModel.update((current) => ({
      ...current,
      email: newEmail,
    }));
  }
}
