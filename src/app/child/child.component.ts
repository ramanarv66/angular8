import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() valuefromparent:string;
  ngOnInit() {
    
    
  }
  @Output() childEvent = new EventEmitter();
  handleChildButton():void{
    this.childEvent.emit(' Emitted From Child');
  }
 }
