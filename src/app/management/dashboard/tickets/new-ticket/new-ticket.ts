import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { FormsModule } from '@angular/forms';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, FormsModule, Control],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  onSubmit(title: string, request: string, form: HTMLFormElement) {
    console.log('Form submitted!');
    console.log('Title:', title);
    console.log('Request:', request);
    form.reset();
  }
}
