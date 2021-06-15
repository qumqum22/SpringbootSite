import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  currentAddress : number;
  address: Address;
  users: User[] =[];

  constructor(private userService: UserService, 
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router) { }

  getAddress():void {
    this.addressService.getAddress(this.currentAddress).subscribe(
      (data) => {
        this.address = data;
      })}

  public getUsersByAddress():void {
    this.userService.getUsersByAddress(this.currentAddress).subscribe(
      (data => this.users = data)
    )
  }
  
  ngOnInit(): void {
    this.currentAddress = +this.route.snapshot.paramMap.get('id')!;
    this.getAddress();
    this.getUsersByAddress();
  }

  onSelect(user: User):void{
    this.router.navigate(['/profile',user.id]);
  }
}
