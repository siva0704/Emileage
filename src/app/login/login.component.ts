import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userdata:any
  editdata:any
  constructor(private builder:FormBuilder,private service:ContactService,private route :Router,private toastr : ToastrService){
  }

    LoginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('')])
  });

  public get email(){
    return this.LoginForm.get('email')
  }
  public get password(){
    return this.LoginForm.get('password')
  }

  ProceedLogin(){
    if(this.LoginForm.valid){
      this.service.Login(this.LoginForm.value).subscribe(res=>{
        
          this.service.authflag =true;
          this.userdata=res
          sessionStorage.setItem('token',this.userdata.jwt)
          this.route.navigate(['home'])
          this.LoginForm.reset()
          this.toastr.success("Loggedin Successfully")
      },
      (error)=>{
        this.toastr.error("Please Enter Valid Credentials",'Invalid Username or Password')
      })
    }
    else{
      this.toastr.error('Please Enter Credentials','Credentials Required')
    }
    
  }
}
