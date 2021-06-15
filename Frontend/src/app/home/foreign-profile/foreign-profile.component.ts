import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Phone } from 'src/app/models/phone';
import { User } from 'src/app/models/user';
import { AddressService } from 'src/app/services/address.service';
import { PhoneService } from 'src/app/services/phone.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-foreign-profile',
  templateUrl: './foreign-profile.component.html',
  styleUrls: ['./foreign-profile.component.scss']
})
export class ForeignProfileComponent implements OnInit {

  currentUser : number;
  user: User;
  phones: Phone[];
  addresses: Address[];
  
  constructor(private userService: UserService, 
              private phoneService: PhoneService, 
              private addressService: AddressService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = +this.route.snapshot.paramMap.get('id')!;
    this.getUser();
    this.getPhones();
    this.getAddresses();
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

  onSelect(address: Address):void{
    this.router.navigate(['/building',address.id]);
  }

  getAddresses(): void {
    this.addressService.getAddresses(this.currentUser).subscribe(
      (response) => this.addresses = response)
    }
}
