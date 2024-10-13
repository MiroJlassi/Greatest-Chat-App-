import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './create-room/create-room.component';
//import { JoinRoomComponent } from './join-room/join-room.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },            // Home route
  { path: 'create-room', component: CreateRoomComponent },  // Create Room route
  //{ path: 'join-room', component: JoinRoomComponent },    // Join Room route
  { path: 'chat/:roomCode', component: ChatComponent },  // Chat route with roomCode
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
