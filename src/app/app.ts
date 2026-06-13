// import { Component } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// import { Header } from "./banking/header/header";
// import { UserInput } from "./banking/user-input/user-input";
// import { InvestmentResult } from './banking/investment-result/investment-result';
// import InvestmentInput from './investment-input.model';
// // import { User } from "./user/user";
// // import { DUMMY_USERS } from './dummy.users';
// // import { Tasks } from './tasks/tasks';

// @Component({
//   selector: 'app-root',
//   imports: [Header, UserInput, InvestmentResult ],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
// onCalculateInvestmentResults($event: InvestmentInput) {
// throw new Error('Method not implemented.');
// }

  
//   // users = DUMMY_USERS;
//   // selectedUserId?: string;

//   // get selectedUser() {
//   //   return this.users.find(u => u.id === this.selectedUserId);
//   // }
  
//   // onSelectUser(userId: string) {
//   //   this.selectedUserId = userId;
//   // }
// }


import { Component } from '@angular/core';
import { Header } from "./management/header/header";
import { ServerStatus } from "./management/dashboard/server-status/server-status";
import { Traffic } from "./management/dashboard/traffic/traffic";
import { Tickets } from "./management/dashboard/tickets/tickets";
import { DashboardItem } from "./management/dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Traffic, Tickets, DashboardItem],
})
export class App {

  
}
