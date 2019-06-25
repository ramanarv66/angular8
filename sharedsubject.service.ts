import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedsubjectService {

  constructor() { }

  sharedSubject:BehaviorSubject<string> = new BehaviorSubject('');
   

  
  setSubjectValue(subjectValue:string):void{
    this.sharedSubject.next(subjectValue);
  }
  getSubjectValue():Observable<string>{
    return this.sharedSubject.asObservable();
  }
}
