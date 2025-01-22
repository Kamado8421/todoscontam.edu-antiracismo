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

  today: string = '';

  constructor(private router: Router){
    const date = new Date();
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    let d = date.getDay() + 19;
    let day = d < 10 ? `0${d}` : d
    let month = date.getMonth();

    this.today = `${day} de ${months[month]} de 2025`;
  }

    closChat() {
      this.router.navigate(['/']);
    }
}
