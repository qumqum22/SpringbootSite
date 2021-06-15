import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserRequest } from 'src/app/models/registerUserRequest';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
    emailField ="";
    passwordField = "";
    confirmPasswordField = "";
    nameField = "";
    surnameField = "";

    registeredUserRequest: RegisterUserRequest = {
      email : "",
      password : "",
      name : "",
      surname : ""
    }


  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    surname: new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  public users: User[];

  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get confirmPassword(){return this.registerForm.get('confirmPassword')}
  get name(){return this.registerForm.get('name')}
  get surname(){return this.registerForm.get('surname')}

  constructor(private userService: UserService, private router:Router) { }

  toTitleCase(name: string): string{
    return `${name[0].toUpperCase()}${name.substr(1).toLowerCase()}`;
  }

  registerUser():void{    
    if(this.emailField.length > 5 
      && this.passwordField.length > 5
      && this.nameField.length > 5
      && this.surnameField.length > 5)
      {
        this.registeredUserRequest.email = this.emailField;
        this.registeredUserRequest.password = this.passwordField;
        this.registeredUserRequest.name = this.toTitleCase(this.nameField);
        this.registeredUserRequest.surname = this.toTitleCase(this.surnameField);
        console.log(this.registeredUserRequest);
        this.userService.registerUser(this.registeredUserRequest).subscribe(
          (data) => {
            console.log(data);
            this.router.navigateByUrl('/login')})
        }
        else{
          alert("Wrong data");
        }
      }

    

  ngOnInit(): void {
  }
}
