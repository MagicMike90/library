import { Component, OnInit, Input} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Hero Portal';
  open: Boolean;


  ngOnInit() {
  }

  toggleSidenav() {
    console.log('toggleSidenav');
    this.open = !this.open;
  }
}
