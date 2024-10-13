import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';
import { RoomManagerService } from '../services/room-manager.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrl: './join-room.component.css'
})
export class JoinRoomComponent {
  roomCode: string = '';

  constructor(private router: Router, private roomService: RoomService, private roomManager: RoomManagerService) { }

  joinRoom(): void {
    this.roomService.joinRoom(this.roomCode).subscribe(
      () => {
        this.roomManager.roomCode = this.roomCode;
        this.router.navigate(['/chat', this.roomCode]);
      },
      (error) => {
        console.error('Error creating room', error);
      }
    );
  }
}
