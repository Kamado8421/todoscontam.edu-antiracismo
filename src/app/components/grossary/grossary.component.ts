import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Glossary } from '../../interfaces';

@Component({
  selector: 'app-grossary',
  imports: [CommonModule, FormsModule],
  templateUrl: './grossary.component.html',
  styleUrl: './grossary.component.css'
})
export class GrossaryComponent {
  items: Glossary[] = [
    { id: 1, title: 'Item #1', description: 'Descrição de item 01', statusOpen: false },
    { id: 2, title: 'Item #2', description: 'Descrição de item 02', statusOpen: false },
    { id: 3, title: 'Item #3', description: 'Descrição de item 03', statusOpen: false },
    { id: 4, title: 'Item #3', description: 'Descrição de item 03', statusOpen: false },
    { id: 5, title: 'Item #3', description: 'Descrição de item 03', statusOpen: false },
  ];


  actionGlossary(id: number) {
    for (let g of this.items) {
      g.statusOpen = g.id === id && !g.statusOpen ? true : false;
    }
  }

}
