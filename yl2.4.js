const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Kas soovite istekohta ise valida ("ise") või loosida ("loos") ? ', istekohaSoov => {
  if (istekohaSoov == "ise") {
    readline.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu") ? ', istekohaSoov2 => {
      if (istekohaSoov2 == "aken") {
        console.log("Valisite ise. Aknakoht.")
      } else if (istekohaSoov2 == "muu") {
        console.log("Valisite ise. Vahekäigukoht.")
      }
      readline.close();
    })
  } else if (istekohaSoov == "loos") {
    const randomNumber = Math.random()
    if (randomNumber < 1/3) {
      console.log("Istekoht loositi. Akna ääres.")
    } else {
      console.log("Istekoht loositi. Vahekäigukoht.")
    }
    readline.close();  
  }
})