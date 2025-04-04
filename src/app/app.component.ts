import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SideSectionComponent } from './components/side-section/side-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TitleComponent, BigCardComponent,SideSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogPage';
}
