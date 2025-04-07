import { Component } from '@angular/core';

@Component({
  selector: 'app-side-section',
  imports: [],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.css'
})
export class SideSectionComponent {

  date: Date = new Date()
  formattedDate: string = this.date.toDateString()

  title:string = this.getCardTitle()
  
  getCardTitle(): string{
    return "Novas tendências de linguagens para desenvolvimento Back-End"

    
  }

}
