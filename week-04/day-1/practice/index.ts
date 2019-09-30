import {Person} from './Person';
import {Woman} from './Woman';
import { Man } from './Man';
import {Bus} from './Bus';

let p = new Person(59, 'asdasd', 167);
//p.introduce();

let w = new Woman(25, 'Rachel', 160, 60);
//w.introduce();

let m = new Man(69, 'Bob', 180, 19);
//m.introduce();

let bus = new Bus();
bus.getOn(p);
bus.getOn(w);
bus.getOn(m);

bus.introduceAll();