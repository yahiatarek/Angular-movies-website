import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { decode } from 'querystring';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  userCurrentData:any= new BehaviorSubject(null)
  encodedData:any
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
if(localStorage.getItem('user')!=null){
  this.decodingData()
}


  }
  register(formData:object):Observable<any>{
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  login(formDataLogin:object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formDataLogin)
  }
  decodingData(){
    this.encodedData=localStorage.getItem('user')
    this.userCurrentData.next(jwtDecode(this.encodedData)) 
console.log(this.userCurrentData);
  }
  logout(){
    localStorage.removeItem('user')
    this.userCurrentData.next(null)
    this._Router.navigate(['login'])
  }
 
}
