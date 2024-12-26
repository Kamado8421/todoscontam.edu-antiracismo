import { Component } from '@angular/core';
import { ChatButtonComponent } from "../../components/chat-button/chat-button.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { GrossaryComponent } from "../../components/grossary/grossary.component";
import { WorksStudentsComponent } from "../../components/works-students/works-students.component";

@Component({
  selector: 'app-landing-page',
  imports: [ChatButtonComponent, NavbarComponent, GrossaryComponent, WorksStudentsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
