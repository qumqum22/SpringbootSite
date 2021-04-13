import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  hello(): string {
    return "Witaj tutaj.";
  }
  
  ngOnInit(): void {
  }

  @Input() event:any
  handleLogInkMe()
  {
    console.log('logged in!');
  }
}
