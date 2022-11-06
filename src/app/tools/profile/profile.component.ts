import { Component, Input,OnInit } from '@angular/core';
import {FirebaseTSFirestore} from  'firebasets/firebasetsFirestore/firebaseTSFirestore' ; 
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() show:boolean ; 

  firestore :FirebaseTSFirestore ;
  auth :FirebaseTSAuth ; 

  constructor() { 
    this.firestore = new FirebaseTSFirestore() ;
    this.auth = new FirebaseTSAuth() ;
  }

  ngOnInit() :void {
  }

  onContinueClick(
    nameInput : HTMLInputElement, 
    RollNoInput: HTMLInputElement ,
    BranchInput: HTMLInputElement,
    SectionInput: HTMLInputElement,
    descriptionInput: HTMLTextAreaElement){
      let name = nameInput.value ; 
      let RollNo = RollNoInput.value ;
      let Branch =BranchInput.value ;
      let Section = SectionInput.value ;
      let description= descriptionInput.value ; 
      this.firestore.create(
        {
        
          path:["Users" , this.auth.getAuth().currentUser?.uid || '{}'] , 
          data :{
                publicName : name , 
                publicRollNo : RollNo , 
                publicBranch : Branch , 
                publicSection : Section , 
                description :description
          } , 
          onComplete: (docId) =>{
            console.log("Hii") ;
              alert("Profile Created") ; 
              nameInput.value = "" ; 
              RollNoInput.value = "" ;
              BranchInput.value = "";
              SectionInput.value ="";
              descriptionInput.value= "" ; 
          },
          onFail : (err) => {
            
          }
        }
      ); 
  }
}
