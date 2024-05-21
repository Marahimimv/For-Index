import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  meyve:string="";
  meyveler: string [] = ["alma","armud","heyva"]

  add(){
    this.meyveler.push(this.meyve);
  }
}
