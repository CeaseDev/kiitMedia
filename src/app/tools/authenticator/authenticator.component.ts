import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/FirebaseTSAuth/firebaseTSAuth';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet' ; 

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  state  = AuthenticatorCompState.LOGIN ; 

  firebasetsAuth:FirebaseTSAuth ;

  constructor( private  bottomSheetRef :MatBottomSheetRef) { 
    this.firebasetsAuth = new FirebaseTSAuth() ;
  }

  ngOnInit(): void {
  }
  OnForgotPassword()
  {
    this.state = AuthenticatorCompState.FORGOT_PASSWORD ; 
  }
  OnCreateAccount()
  {
    this.state = AuthenticatorCompState.REGISTER ;
  }
  OnLogin(){
    this.state = AuthenticatorCompState.LOGIN ;
  }

  isLoginState(){
    return this.state == AuthenticatorCompState.LOGIN ;
  }
  isRegisterState(){
    return this.state == AuthenticatorCompState.REGISTER ;
  }
  isForgotPasswordState(){
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD ;
  }

  getStateText(){
    switch(this.state){
      case AuthenticatorCompState.LOGIN:
        return "Login" ; 
      case AuthenticatorCompState.FORGOT_PASSWORD:
          return "Forgot Password" ;
      case AuthenticatorCompState .REGISTER :
        return "Register" ; 
    }
  }
  isNotEmpty(text:string){
    return text !=null && text.length >0 ; 
  }
  isMatch(text1:string , text2:string){
    return text1 == text2 ; 
  }

  onRegisterClick(registerEmail :HTMLInputElement ,
    registerPassword :HTMLInputElement ,
    registerConfirmPassword:HTMLInputElement
    ){
        console.log("button clicked")
        let email = registerEmail.value ; 
        let password = registerPassword.value ; 
        let confirmPassword = registerConfirmPassword.value ; 

        if(this.isNotEmpty(email) && this.isNotEmpty(password) &&this.isNotEmpty(confirmPassword) && this.isMatch(password ,confirmPassword))
        {
            this.firebasetsAuth.createAccountWith(
            {
              email: email , 
              password: password,
              onComplete: ((uc) =>{
                this.bottomSheetRef.dismiss() 
              }),
              onFail: (err) =>{
                alert("Failed to Create the Account") ;
              }
            }
          );
        }
     } 
     onLogin(loginEmail:HTMLInputElement , loginPassword : HTMLInputElement){
      let email = loginEmail.value ; 
      let password = loginPassword.value ;

      if(this.isNotEmpty(email)&& this.isNotEmpty(password)){
        this.firebasetsAuth.signInWith(
          {
            email: email , 
            password: password,
            onComplete: ((uc) =>{
              this.bottomSheetRef.dismiss(); 
            }),
            onFail: (err) =>{
              alert("Failed to Login") ;
            }
          }
        ) ;
      }
     }

     onResetPassword(resetPassword:HTMLInputElement){
        let email = resetPassword.value ; 

        if(this.isNotEmpty(email)){
          this.firebasetsAuth.sendPasswordResetEmail(
            {
              email : email ,  
              onComplete : (err) =>{
                this.bottomSheetRef.dismiss()
              }
            }
          ); 
        }
     }

}
export enum AuthenticatorCompState{
  LOGIN, 
  FORGOT_PASSWORD, 
  REGISTER
}
