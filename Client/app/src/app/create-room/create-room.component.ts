import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';
import { RoomManagerService } from '../services/room-manager.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  roomCode: string = ''; 

  constructor(private router: Router, private roomService: RoomService, private roomManager: RoomManagerService) { }

  createRoom(): void {
    this.roomService.createRoom(this.roomCode).subscribe(
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
