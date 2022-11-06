import { Component,Input,OnInit } from '@angular/core';
import { PostData } from 'src/app/pages/postfeed/postfeed.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData :PostData ; 
  creatorName:string ; 
  creatorDescription :string ;
  firestore = new FirebaseTSFirestore() ; 
  constructor() { }

  ngOnInit(): void {
    this.getCreatorInfo() ; 
  }
  onReplyClick(){

  }
  getCreatorInfo(){
    this.firestore.getDocument({
      path : ["Users" ,this.postData.creatorId] , 
      onComplete: result =>{
        let userDocument = result.data() ; 
        this.creatorName = userDocument['publicName'] ;
        this.creatorDescription = userDocument['description'] ;  
      }
    });

    }
  }

