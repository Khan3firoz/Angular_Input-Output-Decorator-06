import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decoratorsInputOutput';
  value=''
  public name = "AkhlaqueAhmad, FirozKhan, and AshfaqueAhmad are Engineers. I am Parent"
  getData(value) {
    this.value=value
  }
}
