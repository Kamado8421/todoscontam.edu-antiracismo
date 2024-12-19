import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isMenuOpen: boolean = false;

  actionCloseMenu(){
    this.isMenuOpen = false;
  }
}
