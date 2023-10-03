const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus: ', kirjaSuurus => {
  readline.question('Sisestage kirja teema pealkiri: ', kirjaPealkiri => {
    readline.question('Kas kirjaga on kaasas fail? ', kirjaFail => {
      if (kirjaPealkiri == "" || kirjaSuurus > 1 && kirjaFail == "jah") {
        console.log("Kiri on spämm.") 
      } else {
        console.log("Kiri ei ole spämm")
      }
      readline.close();
    });
  });
});