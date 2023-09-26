const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta õhutemperatuur: ', temperatuur => {
      let vastus
      if (temperatuur > 4) {
        vastus = "Ei ole jäätumise ohtu"
      } else {
        vastus = "On jäätumise oht"
      }
      console.log(vastus);
      readline.close();
});