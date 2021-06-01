import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User | undefined;
  public editUser: User | undefined;
  
  constructor(private userService: UserService) { }

  public getUser():void {
    this.userService.getUser(2).subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  // public onUpdate(user: User):void {
  //   this.userService.updateUser(user).subscribe(
  //     (response: User) => {
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.getUser();
  }

}
