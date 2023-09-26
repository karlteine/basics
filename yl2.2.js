const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta Leedu perekonnanimi: ', perekonnanimi => {
      let vastus
      if (perekonnanimi.endsWith("ne")) {
        vastus = "Abielus"
      } else if (perekonnanimi.endsWith("te")) {
        vastus = "Vallaline"
      } else if (perekonnanimi.endsWith("e")) {
        vastus = "Määramata"
      } else {
        vastus = "Pole ilmselt leedulanna perekonnanimi"
      }
      console.log(vastus);
      readline.close();
});