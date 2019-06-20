import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private httpService:HttpService) { }
  emp:Employee = new Employee();
  dataSave:boolean = false;
  ngOnInit() {
  }
  createEmployee():void{
    console.log(this.emp);
    this.httpService.createEmployee(this.emp).subscribe((data:Employee)=>{
      if(data){
        this.dataSave= true;
      }
    });
  }
}
