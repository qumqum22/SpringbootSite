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
  titleField: string ="";
  nameField:string = "";
  surnameField: string = "";



    constructor(private userService: UserService, private phoneService: PhoneService) { }

    ngOnInit(): void {
      this.getUser();
      this.getPhones();
    }

    getUser():void {
      this.userService.getUser(this.currentUser).subscribe(
        (response: User) => {
          this.user = response;
          this.getSignature();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

    getSignature(){
    this.titleField = this.user.title;
    this.nameField = this.user.name;
    this.surnameField = this.user.surname;
  }
    updateUser():void{
      this.user.title = this.titleField;
      this.user.name = this.nameField;
      this.user.surname = this.surnameField;
      console.log(this.user);
      this.userService.updateUser(this.user).subscribe(
        (response: User) => {
          console.log(response);
          this.getPhones();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


    deletePhone(phoneId: number):void {
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
  getPhones():void {
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

    addPhone(addPhoneForm: NgForm):void {
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


}
