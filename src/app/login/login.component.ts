import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControlName, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterServiceService } from '../register-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
error:string=""

  constructor(private _RegisterServiceService:RegisterServiceService,private _Router:Router) { 

  }
loggedIn:any

loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]{3,}$')])})
  
  loginOnSubmit(){
this.loggedIn=this._RegisterServiceService.login(this.loginForm.value).subscribe((response)=>{
if(response.message==='success'){
 localStorage.setItem('user',response.token)
 this._Router.navigate(['/movies'])
 localStorage.setItem('user',response.token)
this._RegisterServiceService.decodingData()
}else{
  this.error=response.message
}


})   
 
  }
  ngOnDestroy(): void {
    if(this.loggedIn!=undefined){
    this.loggedIn.unsubscribe()
    }
  }

}
