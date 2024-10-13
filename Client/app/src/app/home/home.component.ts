import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToCreateRoom() {
    this.router.navigate(['/create-room']);
  }

  navigateToJoinRoom() {
    this.router.navigate(['/join-room']);
  }
}
