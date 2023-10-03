const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage mitu korda aratada: ', aratusArv => {
  for (let counter = 0; counter < aratusArv; counter++) {
    console.log('Touse ja sara!')
  }
  readline.close();
});