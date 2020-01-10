// import { Component, OnInit } from '@angular/core';
// import { HeroModel } from './../../models/heroModel';
// import { HeroService } from 'src/app/services/single-page/hero-service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrls: ['./inventory.component.scss']
// })
// export class InventoryComponent implements OnInit {
//   private _hero: HeroModel;
//   private _id: number;

//   constructor(private _getSingleHero: HeroService, private _route: ActivatedRoute) { 
//     this._id = Number(this._route.snapshot.paramMap.get('id'));
//     this._getSingleHero.getHero(this._id)
//       .subscribe(data => this._hero = data);
//   }

//   ngOnInit() {
//   }

//   private get hero(): HeroModel {
//     return this._hero;
//   }

// }
