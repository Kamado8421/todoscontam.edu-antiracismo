import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-button',
  imports: [],
  templateUrl: './chat-button.component.html',
  styleUrl: './chat-button.component.css'
})
export class ChatButtonComponent {
  constructor(private router: Router){}

  openChat() {
    this.router.navigate(['/chat']);
  }
}
