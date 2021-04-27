import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  title = "navigation bar";
  //constructor(private router:Router) { }
  constructor() { }
  ngOnInit(): void {
  }


  // goToLoginPage():void{
  //   this.router.navigateByUrl("/login");
  // }
}
