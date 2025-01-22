import { Component } from '@angular/core';
import { Story } from '../../interfaces';
import { stories } from '../../../data/base'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-students',
  imports: [CommonModule, FormsModule],
  templateUrl: './works-students.component.html',
  styleUrl: './works-students.component.css'
})
export class WorksStudentsComponent {
  stories: Story[] = stories;

  constructor(private router: Router) { }

  openStory(id: number) {
    let link = null;

    if(id === 300) link = 'https://www.instagram.com/luciano_mendesz9/'
    else if(id === 100) link = 'https://www.instagram.com/jazz07j4/'
    else link = 'https://www.instagram.com/auisfha38q3/'

    window.open(link, '_blank');
  }

}
