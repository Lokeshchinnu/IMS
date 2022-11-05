import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public loginForm: FormGroup= new FormGroup(
  {
    email: new FormControl(),
    password: new FormControl()
  }
 )
  constructor(private _loginService:LoginService, private _router:Router) { }

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        sessionStorage.setItem('ims-token',data.value);
        this._router.navigateByUrl('/dashboard');

      },
      (Error:any)=>{
        alert('internal server error')
      }
    )
    
  }

  ngOnInit(): void {
  }

}
