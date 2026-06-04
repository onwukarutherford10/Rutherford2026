const car = ['Benz', ' Toyota',' Lambo'];

car [0] = 'Ferrari'
document.querySelector('#first-p').innerHTML = car;

const sports = []
sports[0] = 'Football';
sports[1] = ' Hockey';
sports[2] = ' Golf';
sports[3] = ' Basketball ';
document.querySelector('#second-p').innerHTML = sports;


const games = new Array('Fifa', ' PES', ' FC 26', ' Dream League');
document.querySelector('#third-p').innerHTML = games[0].toString();