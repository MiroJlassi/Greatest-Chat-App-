import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service'; // Update with the actual service path

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  roomCode = 'room1'; // Example roomCode
  messages: string[] = [];
  newMessage = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.loadMessages();
    this.startPolling();
  }

  startPolling(): void {
    setInterval(() => {
      this.loadMessages();
    }, 100);
  }

  loadMessages(): void {
    this.chatService.getMessages(this.roomCode).subscribe((data) => {
      this.messages = data.messages;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.roomCode, this.newMessage).subscribe(() => {
        this.loadMessages(); // Refresh messages after sending
        this.newMessage = ''; // Clear input
      });
    }
  }
}
