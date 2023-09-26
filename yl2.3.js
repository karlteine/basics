const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage enda vanus: ', vanus => {
  readline.question('Sisestage enda sugu: ', sugu => {
    readline.question('Sisestage treeningu tüüp: ', treening => {
      let pulss1
      let pulss2
      if (sugu === "n" || sugu === "N") {
        if (treening == 1) {
          pulss1 = (206-(0.88*vanus))*0.5
          pulss2 = (206-(0.88*vanus))*0.7
        } else if (treening == 2) {
          pulss1 = (206-(0.88*vanus))*0.7
          pulss2 = (206-(0.88*vanus))*0.8
        } else {
          pulss1 = (206-(0.88*vanus))*0.8
          pulss2 = (206-(0.88*vanus))*0.87
        }
      }
      else if (sugu === "m" || sugu === "M") {
        if (treening == 1) {
          pulss1 = (220-vanus)*0.5
          pulss2 = (220-vanus)*0.7
        } else if (treening == 2) {
          pulss1 = (220-vanus)*0.7
          pulss2 = (220-vanus)*0.8
        } else {
          pulss1 = (220-vanus)*0.8
          pulss2 = (220-vanus)*0.87
        }
      }
      console.log("Pulsisagedus peaks olema vahemikus " + Math.round(pulss1) + " kuni " + Math.round(pulss2) +".");
      readline.close();
    })
  })
});