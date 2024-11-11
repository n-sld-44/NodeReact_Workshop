import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
  styleUrl: './lesson-detail-page.component.css'
})


export class LessonDetailPageComponent {

  readonly initialId : number;
  id : number | undefined;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    this.initialId = +activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  onClickGoNextPage() {
    const nextId = this.id ? this.id + 1 : this.initialId;
    this.router.navigate(['/lesson', nextId]);
  }
}
