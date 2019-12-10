import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : User;
  inputText: string = 'Initial value'

  constructor() {
    this.user = new User();
    this.user.name = 'Béla Bá'
    this.user.title = 'Fogyasztóvédelmi fő felelős',
    this.user.address = 'budakalász',
    this.user.phone = [
      '06-1-123-1231',
      '06-20-123-4567',
      '06-30-456-5656']
  }
}
