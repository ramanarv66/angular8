import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  name:string="mphasis";
  message:Event;
  ngOnInit() {
    console.log('inparentt')
    this.httpService.getEmployeeData().subscribe((data:Employee[])=>{
      console.log(data);

    },()=>{

    });
  }
  parentHandleMethod($event:Event):void{
    this.message = $event;
  }

}
