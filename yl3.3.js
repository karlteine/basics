const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Taringute arv: ', taringuArv => {
  for (let counter = 0; counter < taringuArv; counter += 1) {
    const randomNumber = Math.ceil(Math.random() * 6);
    console.log(randomNumber)
  }
  readline.close();
});