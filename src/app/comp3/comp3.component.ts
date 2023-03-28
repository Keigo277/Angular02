import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService,User } from '../service/user.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
   constructor(private service:UserService){}
   private subscription = new Subscription();
   Page3User!:User;
   ngOnInit(): void {
       this.subscription.add(
         this.service.user$.subscribe(
          (userInfo)=>(this.Page3User = userInfo)
         )
       )
   }

   updateUser(){
    this.service.increment();
   }

   ngOnDestroy():void{
    this.subscription.unsubscribe();
   }

}
