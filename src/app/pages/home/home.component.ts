import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SideSectionComponent } from '../../components/side-section/side-section.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TitleComponent, BigCardComponent,SideSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
