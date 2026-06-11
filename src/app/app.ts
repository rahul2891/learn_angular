import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from "./banking/header/header";
import { UserInput } from "./banking/user-input/user-input";
import { InvestmentResult } from './banking/investment-result/investment-result';
// import { User } from "./user/user";
// import { DUMMY_USERS } from './dummy.users';
// import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
  // users = DUMMY_USERS;
  // selectedUserId?: string;

  // get selectedUser() {
  //   return this.users.find(u => u.id === this.selectedUserId);
  // }
  
  // onSelectUser(userId: string) {
  //   this.selectedUserId = userId;
  // }
}
