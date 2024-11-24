import { Component, inject } from '@angular/core';
import {LearningPackageDTO, LearningPackageModel, LearningPackageService} from '../learningpackage.service';
import { Observable, Subject} from 'rxjs';
import {NgFor, NgForOf} from '@angular/common';


@Component({
  selector: 'app-learningpackage-list-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './learningpackage-list-page.component.html',
  styleUrl: './learningpackage-list-page.component.css'
})
export class LearningPackageListPageComponent {
  learningPackages: LearningPackageModel[] = [];
  readonly learningPackageService = inject(LearningPackageService);


  constructor(private readonly learningpackageService: LearningPackageService) {
    console.log("LearningPackageListPageComponent");
  }


  onClickReload() {
    this.learningpackageService.getLearningPackageDTO().subscribe({
      next: data => {
        console.log("Finished loading learning packages", data);
        this.learningPackages= data;
      }, error: error => {
        console.error("Error loading learning packages", error);
        }
    }
    )
  }
}
