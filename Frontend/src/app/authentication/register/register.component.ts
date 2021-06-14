import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

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
  public users: User[];

  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}

  constructor(private userService: UserService, private router:Router) { }

  public onRegister(registerForm: NgForm):void {
    console.log(registerForm.value);
    this.userService.registerUser(registerForm.value).subscribe(
      (data => {
        console.log(data);
        if(data.id >= 1)
          this.router.navigateByUrl('/login');
      }));
  }
  
  ngOnInit(): void {
  }
}
