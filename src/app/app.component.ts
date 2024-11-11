import { Component , NgModule, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MenuNavBarComponent} from './menu-nav-bar/menu-nav-bar.component';
import {LessonEditFormComponent} from './lesson-edit-form/lesson-edit-form.component';
import {LessonSearchPageComponent} from './lesson-search-page/lesson-search-page.component';
import {NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuNavBarComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'NodeReact_Workshop';
  constructor() {
    console.log('AppComponent on init');
  }
  ngOnInit() {
    console.log('AppComponent');
  }
}

