import { Component, OnDestroy, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms'
import { FormGroupDirective } from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnDestroy {
error:string=""
registered:any
  constructor(private _RegisterServiceService:RegisterServiceService,private _router:Router) { }
    registerForm:FormGroup = new FormGroup({
first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
age:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(2)]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]{3,}$')])
    })
  
    submitForm(registerForm:FormGroup){
      this.registered=this._RegisterServiceService.register(registerForm.value).subscribe((response)=>{
        if(response.message==="success"){
          this._router.navigate(['/login'])
        }else{
this.error=response.errors.email.message
        }
      })
    }
    ngOnDestroy(): void {
      if(this.registered!=undefined){
        this.registered.unsubscribe()
        }
        }

}
