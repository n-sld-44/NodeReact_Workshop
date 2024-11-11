import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavBarComponent } from './menu-nav-bar.component';

describe('MenuNavBarComponent', () => {
  let component: MenuNavBarComponent;
  let fixture: ComponentFixture<MenuNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
