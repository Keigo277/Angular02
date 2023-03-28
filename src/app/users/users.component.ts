import { Component,OnInit } from '@angular/core';
import { User } from 'src/main';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser!: User;
  constructor(){
    
  }
  ngOnInit(): void {
      
  }
  

   userSelect(user:User){
    this.selectedUser = user;
   }

   user1:User = {
    name:"Taro",
    age:25,
    job:"Engineer",
    hobby:"Karaoke",
   }
   user2:User = {
    name:"Kaori",
    age:22,
    job:"Salese Person",
    hobby:"shopping",
   }
   user3:User = {
    name:"Kouji",
    age:26,
    job:"Police",
    hobby:"Manga",
   }

   userList:User[]=[this.user1,this.user2,this.user3]

}
