// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Equipment } from 'src/app/models/equipment';

// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrls: ['./inventory.component.scss']
// })
// export class InventoryComponent implements OnInit {
//   selectedItem: Equipment;

//   @Input() inventory: Equipment[];
//   @Output() valueChange = new EventEmitter();

//   valueChanged(equipment: Equipment) {
//     this.selectedItem = equipment;
//     this.valueChange.emit(this.selectedItem);
//   }

//   constructor() {}

//   ngOnInit() {}

//   handleclick(equipment: Equipment) {
//     this.selectedItem = equipment;
//   }
// }
