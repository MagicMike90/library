import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Hero Portal';
  shortnav: Boolean;

  @Input() 
  sidenav;
  
  @Output()
  change: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(){
    this.shortnav = !this.shortnav;
    this.change.emit(this.shortnav);
  }
}
