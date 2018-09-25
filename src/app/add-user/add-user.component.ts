import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// importer le service ici !
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(
    // injecter un service ici !
    private userService: UserService) {}

  ngOnInit() {
  }

  addUser() {
    const name = this.el.nativeElement.value;

    if (name) {
      // on utilise le service ici pour ajouter l'utilisateur;
      console.log('ajout user');
      this.userService.addUser(name);

      this.el.nativeElement.value = '';
    } else {
        console.log('Entrez un nom');
    }
  }

}
