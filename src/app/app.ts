import { Component, signal } from '@angular/core';
import { Aria } from './aria/aria';

@Component({
  selector: 'app-root',
  imports: [Aria],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular-21');
}
