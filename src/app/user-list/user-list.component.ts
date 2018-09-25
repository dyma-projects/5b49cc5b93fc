import { Component, OnInit } from '@angular/core';
// importer le service ici !
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(
    // injecter un service ici !
    private userService: UserService
  ) { }

  ngOnInit() {
    // initialiser les users ici avec le service
    this.userService.users.subscribe(
      (users: string[]) => {
        this.users = users
      });
  }

}
