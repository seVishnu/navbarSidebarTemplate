import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  sidebarToggle() {
    this.menuStatus = !this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
  }
}
