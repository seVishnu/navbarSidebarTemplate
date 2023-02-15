import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() sidebarStatus: boolean = false;
  list = [
    {
      id: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
    },
    {
      id: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line',
    },
    {
      id: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
    },
    {
      id: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      id: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
    },
    {
      id: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
    },
    {
      id: '7',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
    },
  ];
}
