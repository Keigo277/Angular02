import { Component,OnInit } from '@angular/core';
import { UserService,User } from '../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {


    constructor(private service:UserService){}

    private subscription = new Subscription();

    page2User!: User;

    ngOnInit(): void {
        this.subscription.add(
          this.service.user$.subscribe(
            (userInfo)=>(this.page2User = userInfo)
          )
        )
    }

    clearUserInfo(){
      const newUser:User ={
          name:'',
          age: 0,
          job:'',
      }
      this.service.update(newUser);
    }

    ngOnDestroy():void{
      this.subscription.unsubscribe();
    }

}
