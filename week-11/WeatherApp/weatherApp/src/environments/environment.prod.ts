export const environment = { //ez olyan mint a .env
  production: true,
  url: 'http://api.openweathermap.org/data/2.5/',
  APIkey: '&APPID=ea5e05e1f388af69c4977f36d9fa27aa', //ezt kaptam a beregisztráláskor
  cityId: [5809844, 5117451, 6356055, 2643743, 3054643],
  unit: '&units=metric',
  searchTemp: ['group?id=', 'weather?q=', 'forecast?id=']
};
