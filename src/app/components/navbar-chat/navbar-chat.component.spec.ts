import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChatComponent } from './navbar-chat.component';

describe('NavbarChatComponent', () => {
  let component: NavbarChatComponent;
  let fixture: ComponentFixture<NavbarChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
