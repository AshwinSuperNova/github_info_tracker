// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  username = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username.trim() !== '') {
      this.router.navigate(['/user', this.username]);
    } else {
      console.log('Please enter a valid username.');
    }
  }
}
