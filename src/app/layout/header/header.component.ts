import { Component, OnInit, Input} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmitterService } from '../../shared/services//emitter.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Hero Portal';
  open: Boolean;

  @Input() id: string;

  ngOnInit() {
  }

  toggleSidenav() {
    console.log('toggleSidenav');
    this.open = !this.open;
    EmitterService.get(this.id).emit(this.open);
  }
}
