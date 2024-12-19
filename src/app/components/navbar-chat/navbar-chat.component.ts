import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-chat',
  imports: [],
  templateUrl: './navbar-chat.component.html',
  styleUrl: './navbar-chat.component.css'
})
export class NavbarChatComponent {
  botname: string = "Cosme-IA";

  constructor(private router: Router){}

    closChat() {
      this.router.navigate(['/']);
    }
}
