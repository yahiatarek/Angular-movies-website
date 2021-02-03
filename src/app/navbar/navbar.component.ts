import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterServiceService } from '../register-service.service';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isLogin:boolean
change:string=null

  constructor(private _RegisterServiceService:RegisterServiceService,private _SearchService:SearchService) {
    _RegisterServiceService.userCurrentData.subscribe(()=>{
      if(_RegisterServiceService.userCurrentData.value ==null){
        this.isLogin=false
      }else{
        this.isLogin=true
      }
   
    })
    
 
   }
   changeFunction(change){
    this._SearchService.change.next(this.change)
    this._SearchService.change.subscribe(()=>{
      console.log(this._SearchService.change.getValue());
    })

   }
   logout(){
     this._RegisterServiceService.logout()
     this.isLogin=false
   }

   

  ngOnInit(): void {
  }

}
