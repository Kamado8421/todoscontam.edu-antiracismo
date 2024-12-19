import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NavbarChatComponent } from "./components/navbar-chat/navbar-chat.component";
import { LandingPageComponent } from "./screens/landing-page/landing-page.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, FooterComponent, NavbarComponent, NavbarChatComponent, LandingPageComponent, LoadingComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todos_contam_antiracismo';
}
