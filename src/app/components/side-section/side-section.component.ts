import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-section',
  imports: [],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.css'
})
export class SideSectionComponent {

  date: Date = new Date()
  formattedDate: string = this.date.toDateString()

  @Input()
  photoCover:string =" ";
  @Input()
  title:string = " ";
}
