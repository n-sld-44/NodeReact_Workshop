import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgbDropdownItem,
    NgbDropdownToggle,
    NgbDropdownMenu
  ],
  templateUrl: './menu-nav-bar.component.html',
  styleUrl: './menu-nav-bar.component.css'
})
export class MenuNavBarComponent {

}
