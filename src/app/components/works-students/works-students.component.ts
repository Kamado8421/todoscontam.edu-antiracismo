import { Component } from '@angular/core';
import { Story } from '../../interfaces';
import { stories } from '../../../data/base'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoryViewerComponent } from "../story-viewer/story-viewer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-students',
  imports: [CommonModule, FormsModule, StoryViewerComponent],
  templateUrl: './works-students.component.html',
  styleUrl: './works-students.component.css'
})
export class WorksStudentsComponent {
  stories: Story[] = stories;

  constructor(private router: Router) { }

  openStory(id: number) {
    this.router.navigate(['/viewer/', id]);
  }

}
