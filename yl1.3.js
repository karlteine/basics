const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage astme alus: ', astmeAlus => {
  readline.question('Sisestage astendaja: ', astendaja => {
    console.log(Math.pow(astmeAlus, astendaja));
    readline.close();
  })
});