import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service'; // Adjust the service path

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  roomCode: string = '';  // Room code input from user

  constructor(private router: Router, private roomService: RoomService) { }

  createRoom(): void {
    // Call the service to create a new room and navigate to the chat component
    this.roomService.createRoom(this.roomCode).subscribe(
      () => {
        // On successful room creation, navigate to chat component with the room code
        this.router.navigate(['/chat', this.roomCode]);
      },
      (error) => {
        console.error('Error creating room', error);
      }
    );
  }
}
