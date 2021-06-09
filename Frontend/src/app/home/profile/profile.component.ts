import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PhoneService } from 'src/app/services/phone.service';
import { User } from '../../models/user';
import { Phone} from '../../models/phone';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser = 1;
  user: User;
  editUser: User;
  phones: Phone[];
  signature: string = "";


  constructor(private userService: UserService, private phoneService: PhoneService) { }

  public getUser():void {
    this.userService.getUser(this.currentUser).subscribe(
      (response: User) => {
        this.user = response;
        this.signature = this.getSignature();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getSignature(){
    return `${this.user.title} ${this.user.name} ${this.user.surname}`;
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

      // get user's phones, powinno byc zalezne od id uzytkownika
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

    public addPhone(addPhoneForm: NgForm):void {
      console.log(addPhoneForm.value);
      this.phoneService.addPhone(addPhoneForm.value, this.user.id).subscribe(
        (response: Phone) => {
          console.log(response);
          this.getPhones();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }
    updateUser(){
      const parts = this.signature.split(" ");
      this.user.title = parts[0];
      this.user.name = parts[1];
      this.user.surname = parts[2];
      console.log(this.user);
      this.userService.updateUser(this.user);
    }

    // public editDescription(editDescriptionForm: NgForm):void {
    //   console.log(editDescriptionForm.value);
    //   this.userService.editDescription(editDescriptionForm.value).subscribe(
    //     (response: User) => {
    //       console.log(response);
    //       this.getUser();
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
