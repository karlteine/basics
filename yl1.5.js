const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', ainepunkt => {
  readline.question('Sisestage nädalate arv: ', nadal => {
      console.log(Math.ceil((ainepunkt * 26) / nadal));
      readline.close();
  })
});