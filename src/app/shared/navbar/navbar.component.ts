import { Component } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userLoginOn: boolean= false;
  constructor(private LoginService:LoginService){

  }
  ngOnInit():void {
    this.LoginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }
}

