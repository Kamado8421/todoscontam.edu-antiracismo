import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarChatComponent } from "../../components/navbar-chat/navbar-chat.component";
import { FormsModule } from '@angular/forms';
import { Message } from '../../interfaces';
import { reqGeminiGoogle } from '../../services';

@Component({
  selector: 'app-chat-screen',
  imports: [CommonModule, NavbarChatComponent, FormsModule],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  message: string = '';

  isBotTyping: boolean = false;

  messages: Message[] = [];

  constructor() {
    this.sendMessage()
  }

  private addMessageChat(data: Message) {
    this.messages.push(data);
    this.scrollToBottom();
  }

  private scrollToBottom(): void {

  }

  async sendMessage() {
    if (!this.message) return;
    if (this.isBotTyping) return alert('Aguarde a resposta do Bot!');

    const data: Message = {
      id: this.message.length + 1,
      message: this.message,
      isBot: false,
      hours: this.getHours()
    }

    this.message = '';

    this.addMessageChat(data);
    this.isBotTyping = true;

    await this.getResponseBot(data.message);

  }

  private async getResponseBot(text: string) {
    if (!text) throw new Error('Mensagem para obter resposta do bot está nula.');


    const data: Message = {
      id: this.message.length + 1,
      message: '👨‍💻 Digitando...',
      isBot: true,
      hours: this.getHours()
    }

    setTimeout(() => {
      this.addMessageChat(data);
    }, 700);

    const result = await reqGeminiGoogle(text, this.messages);

    this.messages.map(m => {
      if (m.id === data.id) {
        m.message = result;
      }
    });


    this.isBotTyping = false;
  }

  private getHours() {
    const date = new Date();
    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }
}
