import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface User{
  name: string,
  age: number,
  job: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 data:User = {
  name: "Xmen",
  age:30,
  job:"Mutant",
 }
 
 user$ = new BehaviorSubject<User>(this.data);

 update(userInfo:User){
  console.log('更新前',this.user$.getValue());
  this.user$.next(userInfo);
  console.log('更新後',this.user$.getValue())
 }

 increment(){
  console.log('インクリメント前',this.user$.getValue().age);

  const userInfo ={
    ...this.user$.getValue(),
    age:this.user$.getValue().age + 1,
  };

  this.user$.next(userInfo);
  console.log("インクリメント後",this.user$.getValue().age)
 }

  constructor() { }
}
