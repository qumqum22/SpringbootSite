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
  phones: Phone[];
  titleField: string ="";
  nameField:string = "";
  surnameField: string = "";
  descriptionField: string = "";

    constructor(private userService: UserService, private phoneService: PhoneService) { }

    ngOnInit(): void {
      this.getUser();
      this.getPhones();
    }

    getUser():void {
      this.userService.getUser(this.currentUser).subscribe(
        (response) => {
          this.user = response;
          this.getSignature();
        })}

    getSignature(){
    this.titleField = this.user.title;
    this.nameField = this.user.name;
    this.surnameField = this.user.surname;
    this.descriptionField = this.user.description;
  }

    private toTitleCase(name: string): string{
      return `${name[0].toUpperCase()}${name.substr(1).toLowerCase()}`;
    }

    updateUser():void{
      this.user.title = this.titleField;
      if(this.nameField != "")
        this.user.name = this.toTitleCase(this.nameField);
      if(this.surnameField != "")
        this.user.surname = this.toTitleCase(this.surnameField);
      if(this.descriptionField != "")
        this.user.description = this.descriptionField;

      this.userService.updateUser(this.user).subscribe(
        (response) => {
        this.getPhones();
        alert("Profile updated.")})
      }


    deletePhone(phoneId: number):void {
      this.phoneService.deletePhone(phoneId).subscribe(
        (response) => this.getPhones())
      }

      // get user's phones, powinno byc zalezne od id uzytkownika
    getPhones():void {
    this.phoneService.getPhones().subscribe(
      (response) => this.phones = response)
    }

    addPhone(addPhoneForm: NgForm):void {
      console.log(addPhoneForm.value);
      this.phoneService.addPhone(addPhoneForm.value, this.user.id).subscribe(
        (response) =>this.getPhones())
      }


}
