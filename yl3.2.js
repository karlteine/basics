const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ringide arv: ', ringiArv => {
  let porgandArv = 0
  for (let counter = 1; counter <= ringiArv; counter += 1) {
    if (counter % 2 == 0) {
      porgandArv += counter
    }
  }
  console.log('Porgandite koguarv on ' + porgandArv)
  readline.close();
});