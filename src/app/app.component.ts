import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  selectedMenu: 'home' | 'user-lists'  = 'home';
  constructor(
    public router: Router) {}

  clickMenu(selectedMenu: any): void {
  
      switch (selectedMenu) {
        case "home": {
          this.selectedMenu = 'home'
          this.router.navigate(['/'])
          break;
        }
        case "user-lists": {
          this.selectedMenu = 'user-lists'
          this.router.navigate(['/user-lists'])
          break;
        }
      }
    }
    ngOnInit(): void {
  
    }

  }

