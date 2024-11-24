import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPackageListPageComponent } from './learningpackage-list-page.component';

describe('LearningpackageListPageComponent', () => {
  let component: LearningPackageListPageComponent;
  let fixture: ComponentFixture<LearningPackageListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackageListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningPackageListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
