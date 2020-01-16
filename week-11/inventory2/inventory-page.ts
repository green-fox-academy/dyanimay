// import { Component, OnInit } from '@angular/core';
// import { HeroService } from '../../services/single-page/hero-Service';
// import { HeroModel } from './../../models/heroModel';
// import { ActivatedRoute } from '@angular/router';
// import { Equipment } from 'src/app/models/equipment';

// @Component({
//   selector: 'app-inventory-page',
//   templateUrl: './inventory-page.component.html',
//   styleUrls: ['./inventory-page.component.scss'],
// })
// export class InventoryPageComponent implements OnInit {
//   private _hero: HeroModel;
//   private _id: number;
//   public _heroInventory: Equipment[];
//   selectedItem: Equipment;

//   constructor(private _getSingleHero: HeroService, private _route: ActivatedRoute ) {
//   this._id = Number(this._route.snapshot.paramMap.get('id'));
//   this._getSingleHero.getHero(this._id)
//     .subscribe(data => {
//       this._hero = data;
//       console.log(data.inventory);
//       this._heroInventory = data.inventory;
//     });
//   }

//   ngOnInit() {
//   }

//   public get hero(): HeroModel {
//     return this._hero;
//   }

//   showSelectedItem(item: Equipment) {
//     this.selectedItem = item;
//   }
// }
