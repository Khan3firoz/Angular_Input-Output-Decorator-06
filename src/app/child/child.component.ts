import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter()
  message="Welcome to Jurasic Park"
  sendmessage() {
    this.childEvent.emit(this.message)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
