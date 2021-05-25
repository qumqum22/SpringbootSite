import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])

  })

  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}

  constructor() { }


  
  ngOnInit(): void {
  }

  onLogin()
  {
    console.warn(this.registerForm.value);
  }
}
