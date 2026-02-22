import { Component, inject, OnInit } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test implements OnInit {
  private userService = inject(User);
  public users: any;

  ngOnInit() {
    this.userData();
  }

  userData() {
    this.userService.getData().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
