import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../../interfaces';
import { stories } from '../../../data/base';


@Component({
  selector: 'app-story-viewer',
  imports: [],
  templateUrl: './story-viewer.component.html',
  styleUrls: ['./story-viewer.component.css']
})
export class StoryViewerComponent {

  stories: Story[] = stories;
  story: Story | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.story = this.stories.find(s => s.id == id);

      if (!this.story) {
        alert('Não foi possível encontrar essa publicação! ')
        this.onBack();
      }
    });
  }

  onBack(){
    this.router.navigate(['/'])
  }
}
