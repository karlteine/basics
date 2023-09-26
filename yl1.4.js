const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage oma nimi: ', nimi => {
  readline.question('Sisestage lubatud kiirus (km/h): ', lubatudKiirus => {
    readline.question('Sisestage tegelik kiirus (km/h): ', tegelikKiirus => {
      console.log(nimi + ", kiiruse ületamise eest on teie trahv " + Math.min(190, (tegelikKiirus - lubatudKiirus) * 3) + " eurot.");
      readline.close();
    })
  })
});