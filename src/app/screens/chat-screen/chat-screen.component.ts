import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavbarChatComponent } from "../../components/navbar-chat/navbar-chat.component";
import { FormsModule } from '@angular/forms';
import { Message } from '../../interfaces';
import Server from '../../services';

@Component({
  selector: 'app-chat-screen',
  imports: [CommonModule, NavbarChatComponent, FormsModule],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent  {
  message: string = 'Olá, Cosme-IA';
  
  isBotTyping: boolean = false;

  messages: Message[] = [{
    id: this.message.length + 1,
      message: 'this.message',
      isBot: false,
      hours: '00:00'
  }];

  constructor(){

  }
  private addMessageChat(data: Message) {
    this.messages.push(data);
  }

  async sendMessage() {
    if (!this.message) return;
    if (!this.isBotTyping) return alert('Aguarde a resposta do Bot!');

    const data: Message = {
      id: this.message.length + 1,
      message: this.message,
      isBot: false,
      hours: this.getHours()
    }

    this.addMessageChat(data);
    this.isBotTyping = true;

    await this.getResponseBot(data.message);

  }

  private async getResponseBot(text: string){
    if(!text) throw new Error('Mensagem para obter resposta do bot está nula.');

    const result = 'Oii, tudo bem? ^^';

    const data: Message = {
      id: this.message.length + 1,
      message: result,
      isBot: true,
      hours: this.getHours()
    }

    this.addMessageChat(data);
    this.isBotTyping = false;
  }

  private getHours(){
    const date = new Date();
    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }
}
