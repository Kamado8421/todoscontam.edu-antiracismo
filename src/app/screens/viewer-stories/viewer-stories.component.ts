import { Component } from '@angular/core';
import { StoryViewerComponent } from "../../components/story-viewer/story-viewer.component";
import { WorksStudentsComponent } from "../../components/works-students/works-students.component";

@Component({
  selector: 'app-viewer-stories',
  imports: [StoryViewerComponent, WorksStudentsComponent],
  templateUrl: './viewer-stories.component.html',
  styleUrl: './viewer-stories.component.css'
})
export class ViewerStoriesComponent {

}
