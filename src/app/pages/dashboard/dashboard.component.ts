import { Component } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userLoginOn: boolean = false;
  userData? : User;

  constructor (private LoginService: LoginService){

  }

  file:any;
  getFile(event: any){
    this.file = event.target.files[0];

    // console.log('file', this.file);
    // const selectedFile = this.file[0];
    // const fileReader = new FileReader();
    // fileReader.readAsBinaryString(selectedFile);
    // fileReader.onload = (event) => {
    //   console.log(event);
    // }
  }

  ngOnInit(): void {
    this.LoginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.LoginService.currentUserData.subscribe({
      next:(userData) => {
        this.userData= userData;
      }
    })
  }
}
