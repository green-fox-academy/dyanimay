import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  // @Input('name') userName: string;
  // @Input('address') address: string;
  @Input('user') user: User;
  isCollapsed : boolean = true;

  constructor() { 
  }
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    // this.user = {
    //   name: this.userObj.name,
    //   title: this.userObj.title,
    //   address: this.userObj.address,
    //   phone: [
    //     '06-1-123-1231',
    //     '06-20-123-4567',
    //     '06-30-456-5656']
    // }
  }

}
