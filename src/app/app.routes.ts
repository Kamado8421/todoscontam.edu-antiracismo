import { Routes } from '@angular/router';
import { LandingPageComponent } from './screens/landing-page/landing-page.component';
import { ChatScreenComponent } from './screens/chat-screen/chat-screen.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'chat', component: ChatScreenComponent},
];

