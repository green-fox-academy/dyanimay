interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy{ //implements make it NECESSARY to use getDowBooking and getCodeBooking
  getDowBooking(): string{
    let DOW: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    return DOW[(Math.floor(Math.random()*6))];
  }
  getCodeBooking(): string{
    let codeSource: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let codeBooking = [];
    for (let i: number = 0; i < 8; i++){
      codeBooking.push(codeSource[Math.floor(Math.random() * codeSource.length)]);
    }
    return codeBooking.join('');
  }
  printOut(): void{
    console.log('Booking# ' + this.getCodeBooking() + ' for ' + this.getDowBooking());
  };
}
let anyReservation = new Reservation();

anyReservation.printOut();
anyReservation.printOut();
anyReservation.printOut();
anyReservation.printOut();
anyReservation.printOut();
anyReservation.printOut();