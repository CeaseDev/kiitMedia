import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp' ;
import {environment} from 'src/environments/environment' ; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticatorComponent } from './tools/authenticator/authenticator.component' ; 
import { HomepageComponent } from './pages/homepage/homepage.component';

import { MatBottomSheetModule} from '@angular/material/bottom-sheet' ; 
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { ProfileComponent } from './tools/profile/profile.component' ;

import {MatDialogModule} from  '@angular/material/dialog' ; 
import {MatIconModule} from  '@angular/material/icon' ;
import { CreatePostComponent } from 'src/app/tools/create-post/create-post.component';
import {PostFeedComponent} from './pages/postfeed/postfeed.component';
import { PostComponent } from './tools/post/post.component';
import { ReplyComponent } from './tools/reply/reply.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticatorComponent,
    EmailVerificationComponent,
    ProfileComponent,
    CreatePostComponent,
    PostFeedComponent,
    PostComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig)
  }


}
