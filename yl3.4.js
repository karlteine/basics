const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mitu poialpoissi tahab ounu: ', soojateArv => {
  let counter2 = 0;
  for (let counter = 0; counter < soojateArv; counter += 1) {
    const randomNumber = Math.round(Math.random()) + 1;
    if (randomNumber == 1) {
      counter2 += randomNumber;
      console.log("1")
    }
    else {
      counter2 += randomNumber;
      console.log("2")
    }
  }
  console.log('Lumivalgekesele jai ' + (14 - counter2))
  readline.close();
});