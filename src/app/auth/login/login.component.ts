import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginError: string= "";
  loginForm= this.formBuilder.group({
    username:['', [Validators.required]],
    password:['', [Validators.required]],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private loginSerivce: LoginService){

  }

  ngOnInit(): void {

  }

  get username(){
    return this.loginForm.controls.username
  }

  get password(){
    return this.loginForm.controls.password
  }

  login(){
    if(this.loginForm.valid){
      this.loginSerivce.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.log("Login completed");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      });

    }
    else{
      this.loginForm.markAllAsTouched();
      console.error("Data entry error");
    }
  }

}
