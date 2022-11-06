import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PostFeedComponent } from './pages/postfeed/postfeed.component';

const routes: Routes = [
  {
    path: '' , 
    component:HomepageComponent
  },
  {
    path : "emailVerification" , component :EmailVerificationComponent 
  },
  {
    path : "postfeed" , component :PostFeedComponent 
  },
  {
    path: '**' , 
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
