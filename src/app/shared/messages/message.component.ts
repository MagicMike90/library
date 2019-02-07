import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'paMessages',
  moduleId: module.id,
  templateUrl: 'message.component.html'
})
export class MessageComponent {
  lastMessage: Message;

  constructor(messageService: MessageService, router: Router) {
    messageService.messages.subscribe(m => (this.lastMessage = m));
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)
      )
      .subscribe(e => {
        this.lastMessage = null;
      });
  }
}
