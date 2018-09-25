import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// attribut
public list: string[] = ['Maxim', 'Tom', 'Wouter'];
public users: BehaviorSubject<string[]> = new BehaviorSubject(this.list);

  constructor() { }

// méthode
  public addUser(name: string) {
    console.log('Done');
    this.list.push(name)
    this.users.next(this.list);
  }

}
