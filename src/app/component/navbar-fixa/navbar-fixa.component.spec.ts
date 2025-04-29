import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixaComponent } from './navbar-fixa.component';

describe('NavbarFixaComponent', () => {
  let component: NavbarFixaComponent;
  let fixture: ComponentFixture<NavbarFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFixaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
