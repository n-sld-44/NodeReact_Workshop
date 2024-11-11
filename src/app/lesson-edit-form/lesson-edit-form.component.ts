import { Component, OnDestroy, OnInit } from '@angular/core';
import {RouterLink, Router} from "@angular/router";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {UserSettingsService} from '../user-settings.service';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, FormBuilder, FormGroup, Validator, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    NgbTooltip,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})
export class LessonEditFormComponent implements OnInit, OnDestroy {
  faHome = faHome;
  lessonForm: FormGroup;

  constructor(private router: Router, private userSettings: UserSettingsService, formBuilder: FormBuilder) {
    this.lessonForm = new FormBuilder().group({
      title: ['', Validators.required],
      description: ['' , Validators.required],
      category: [''],
      level: [''],
      prerequisites: [''],
      tags: [''],
      copyright: ['']

    });
  }
    ngOnInit()
    {
      console.log('LessonEditFormComponent');
    }

    ngOnDestroy()
    {
      console.log('LessonEditFormComponent on destroy');
    }

    onClickSubmit()
    {

      //Could execute code then navigate
      this.userSettings.lastLessonId = 1234;
      this.router.navigate(['lesson-list']).then(res => {
      });
    }

    onSubmit(){
      if (this.lessonForm.valid){
        const formData = this.lessonForm.value;
        console.log('formDataSubmitted :', formData);
      } else {
        console.log('Form is invalid please check fields');
      }
    }
  }


