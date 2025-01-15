import { Component } from '@angular/core';
import { Story } from '../../interfaces';
import myStories from './stories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoryViewerComponent } from "../story-viewer/story-viewer.component";

@Component({
  selector: 'app-works-students',
  imports: [CommonModule, FormsModule, StoryViewerComponent],
  templateUrl: './works-students.component.html',
  styleUrl: './works-students.component.css'
})
export class WorksStudentsComponent {
    stories: Story[] = myStories;

}
