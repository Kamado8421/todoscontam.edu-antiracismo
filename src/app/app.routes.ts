import { Routes } from '@angular/router';
import { LandingPageComponent } from './screens/landing-page/landing-page.component';
import { ChatScreenComponent } from './screens/chat-screen/chat-screen.component';
import { ViewerStoriesComponent } from './screens/viewer-stories/viewer-stories.component';
import { StoryViewerComponent } from './components/story-viewer/story-viewer.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'chat', component: ChatScreenComponent},
  {path: 'viewer/:id', component: StoryViewerComponent},
];

