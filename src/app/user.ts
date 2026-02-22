import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  private http = inject(HttpClient);

  getData() {
    return this.http.get(this.baseUrl);
  }
}
