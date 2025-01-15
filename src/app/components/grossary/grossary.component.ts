import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Glossary } from '../../interfaces';
import { glossaryDB } from '../../../data/base';

@Component({
  selector: 'app-grossary',
  imports: [CommonModule, FormsModule],
  templateUrl: './grossary.component.html',
  styleUrl: './grossary.component.css'
})
export class GrossaryComponent {
  items: Glossary[] = glossaryDB;

  actionGlossary(id: number) {
    for (let g of this.items) {
      g.statusOpen = g.id === id && !g.statusOpen ? true : false;
    }
  }

}
