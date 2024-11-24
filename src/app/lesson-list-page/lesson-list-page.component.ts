import {Component, inject} from '@angular/core';
import {UserSettingsService} from '../user-settings.service';
import {LearningPackageModel, LearningPackageService} from '../learningpackage.service';
import {NgForOf} from '@angular/common';
import {LearningPackage} from '../../../server/Classes/LearningPackage';

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lesson-list-page.component.html',
  styleUrl: './lesson-list-page.component.css'
})
export class LessonListPageComponent {
  readonly learningPageService = inject(LearningPackageService);
  learningPackages: LearningPackageModel[] = [];

  constructor(private userSettings: UserSettingsService) {
    console.log("get lastLessonId", userSettings.lastLessonId);
  }

  onClickReload() {
    this.learningPageService.getLearningPackageDTO().subscribe({
      next:data => {
        console.log('finished loaded packages');
        this.learningPackages = data;
      }, error : err => {
        console.log('Failed to load from http')
    }
    })
  }
}
