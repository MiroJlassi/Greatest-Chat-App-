import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getMessages(roomCode: string): Observable<{ messages: string[] }> {
    return this.http.get<{ messages: string[] }>(`${this.apiUrl}/room/messages/${roomCode}`);
  }

  sendMessage(roomCode: string, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/room/message/${roomCode}`, { message });
  }
}
