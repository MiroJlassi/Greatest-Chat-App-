import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { RoomManagerService } from '../services/room-manager.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  roomCode = '';
  messages: string[] = [];
  newMessage = '';

  constructor(private chatService: ChatService, private roomManager: RoomManagerService) { }

  ngOnInit(): void {
    this.loadMessages();
    this.roomCode = this.roomManager.roomCode;
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
