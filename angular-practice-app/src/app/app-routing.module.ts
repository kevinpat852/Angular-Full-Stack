import { AuthGuard } from './auth.guard';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ArtistsComponent } from './Components/artists/artists.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, SignupComponent, HomeComponent, ArtistsComponent, FAQComponent, ContactComponent, FeedbackComponent ];
