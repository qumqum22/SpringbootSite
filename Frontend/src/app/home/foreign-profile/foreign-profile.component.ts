import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/app/models/phone';
import { User } from 'src/app/models/user';
import { PhoneService } from 'src/app/services/phone.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-foreign-profile',
  templateUrl: './foreign-profile.component.html',
  styleUrls: ['./foreign-profile.component.scss']
})
export class ForeignProfileComponent implements OnInit {

  currentUser : number;
  id: string | null;
  user: User;
  phones: Phone[];
  
  constructor(private userService: UserService, private phoneService: PhoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = +this.route.snapshot.paramMap.get('id')!;
    this.getUser();
    this.getPhones();
  }

  getUser():void {
    this.userService.getUser(this.currentUser).subscribe(
      (response) => {
        this.user = response;
      })}


  getPhones():void {
  this.phoneService.getPhones(this.currentUser).subscribe(
    (response) => this.phones = response)
  }

}
