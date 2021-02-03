import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  change = new BehaviorSubject(null)
  constructor() {}
  
   
}
