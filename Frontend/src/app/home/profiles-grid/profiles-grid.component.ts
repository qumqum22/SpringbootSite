import { HttpErrorResponse } from '@angular/common/http';
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

  public users: User[] =[];

  constructor(private userService: UserService, private router: Router) { }

  public getUsers():void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User):void{
    this.router.navigate(['/profile',user.id]);
  }
}
