import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PhoneService } from 'src/app/services/phone.service';
import { User } from '../../models/user';
import { Phone} from '../../models/phone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;
  editUser: User | undefined;
  phones: Phone[] = [];
  
  constructor(private userService: UserService, private phoneService: PhoneService) { }

  public getUser():void {
    this.userService.getUser(1).subscribe(
      (response: User) => {
        this.user = response;
        //console.log(this.user);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getPhones():void {
    this.phoneService.getPhones().subscribe(
      (response: Phone[]) => {
        this.phones = response;
        console.log(this.phones);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

    public deletePhone(phoneId: number):void {
      this.phoneService.deletePhone(phoneId).subscribe(
        (response: void) => {
          console.log(response);
          this.getPhones();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

    // public addPhone(userId: number, phone: number):void {
    //   this.userService.addPhone(userId).subscribe(
    //     (response: User) => {
    //       console.log(response);
    //       this.getPhones();
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   )
    // }
  // public onUpdateUser(user: User):void {
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
    this.getPhones();
  }

}
