import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = true;

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {}

  reloadPage(): void {
    window.location.reload();
  }


}
