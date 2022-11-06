import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet' ; 
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private login: MatBottomSheet) { }

  ngOnInit(): void {
  }

  onGetStartedClick(){
    this.login.open(AuthenticatorComponent) ;
  }
}
