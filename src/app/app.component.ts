import { Component } from '@angular/core';
import {HeaderComponent} from './Components/header/header.component'
import { UserComponent } from "./Components/user/user.component";
import { USERS_DUMMY } from './Components/user/users-dummy';
import { TasksComponent } from "./Components/tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso-Angular';
  users = USERS_DUMMY;

  selectuserId?: string;

  get selectedUser(){
    return this.users.find((user)=>user.id ===this.selectuserId);
  }
  OnSelectUser(id: string){
    this.selectuserId = id;
  }
}
