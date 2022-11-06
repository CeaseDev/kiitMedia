import { Component } from '@angular/core';
import {FirebaseTSAuth} from 'firebasets/firebasetsAuth/firebaseTSAuth' ;
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { Router } from '@angular/router' ; 
import {FirebaseTSFirestore} from  'firebasets/firebasetsFirestore/firebaseTSFirestore' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static getUserDocument() {
    throw new Error('Method not implemented.');
  }

  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore() ;
  
  userHasProfile = true ; 
  userDocument :userDocument ;

  constructor(private loginSheet: MatBottomSheet, private router: Router ) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
            },
            whenSignedOut: user => {
              alert("Logged Out");
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]) ; 
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile() ;
            },
            whenChanged: user => {

            },
          }
        )
      }
    );
  }


  getUserProfile(){
    this.firestore.listenToDocument(
      {
        name : "Getting Document" , 
        path :[ "Users" , this.auth.getAuth().currentUser?.uid || '{}'],
        onUpdate :(result) =>{
          this.userDocument = <userDocument>result.data() ; 
            this.userHasProfile = result.exists ; 
            if(this.userHasProfile){
              this.router.navigate(["postfeed"]) ; 
            }
        }
      }
    );
  }
  loggedIn() {
    return this.auth.isSignedIn();
  }
  onlogOutClick() {
    this.auth.signOut();
  }
  title = 'kiitMedia';
  onloginClick() {
    this.loginSheet.open(AuthenticatorComponent);
  }
}
export interface userDocument{
  description: string ; 
  publicBranch: string ;
  publicName: string ;
  publicRollNo: string ;
  publicSection: string ;
}