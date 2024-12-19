import { Component } from '@angular/core';
import { ChatButtonComponent } from "../../components/chat-button/chat-button.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  imports: [ChatButtonComponent, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
