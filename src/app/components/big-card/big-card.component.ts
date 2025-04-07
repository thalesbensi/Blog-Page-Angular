import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  date: Date = new Date()
  formattedDate: string = this.date.toDateString()

  @Input()
  photoCover:string =" ";

  @Input()
  title:string = " ";
  @Input()
  description:string = " ";

}
