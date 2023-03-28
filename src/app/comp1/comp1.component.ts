import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {  User,UserService} from '../service/user.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
    constructor(private service:UserService){}

    private subscriptions = new Subscription();
    
    page1User!: User;

    

    ngOnInit(): void {
        this.subscriptions.add(
          this.service.user$.subscribe(
            (userInfo)=>(this.page1User = userInfo)
          )
        )
    }
   
     updateUserInfo(){
      const newUser:User = {
        name:'Tony Stark',
        age: 34,
        job: 'CEO',
      }
      this.service.update(newUser);
     }

     ngOnDestroy():void{
      this.subscriptions.unsubscribe();
     }

}
