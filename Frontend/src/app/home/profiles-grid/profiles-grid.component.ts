import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-profiles-grid',
  templateUrl: './profiles-grid.component.html',
  styleUrls: ['./profiles-grid.component.scss']
})
export class ProfilesGridComponent implements OnInit {

  users: User[] =[];
  titleField: string = "";
  nameField:string = "";
  surnameField:string = "";
  constructor(private userService: UserService, private router: Router) { }

  getUsers():void {
    this.userService.getUsers().subscribe(
      (data => this.users = data)
    )
  }
  
  ngOnInit(): void {
    this.getUsers();
  }


  onSelect(user: User):void{
    this.router.navigate(['/profile',user.id]);
  }
  filtrUser():void{
    return;
  }
}