import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() { 
    this.user = {
      name: 'Foo Bar',
      title: 'Software Developer',
      address: 'Budapest',
      phone: [
        '06-1-123-1231',
        '06-20-123-4567',
        '06-30-456-5656']
    }
  }

  ngOnInit() {
  }

}
