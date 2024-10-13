import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:3000/room/';

  constructor(private http: HttpClient) { }

  createRoom(roomCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/new-room`, { roomCode });
  }

  joinRoom(roomCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/join-room`, { roomCode });
  }
}
