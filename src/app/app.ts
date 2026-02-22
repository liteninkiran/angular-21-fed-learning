import { Component, signal } from '@angular/core';
import { SignalForms } from './signal-forms/signal-forms';

@Component({
  selector: 'app-root',
  imports: [SignalForms],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular-21');
}
