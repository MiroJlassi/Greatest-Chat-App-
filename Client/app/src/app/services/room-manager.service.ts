import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomManagerService {
  roomCode: string = '';
  constructor() { }
}
