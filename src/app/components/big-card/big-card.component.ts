import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  date: Date = new Date()
  formattedDate: string = this.date.toDateString()

  title:string = this.getCardTitle()
  description:string = this.getCardDescription()


  getCardTitle(): string{
    return "Exploração de design para candidatar-se a vaga de Desenvolvedor Front-end"
  }

  getCardDescription(): string{
    return "Marcos já trabalhou em projetos, mas frequentemente faz exploração de design. Ele pode se candidatar a uma vaga como Desenvolvedor Front-end"
  }
}
