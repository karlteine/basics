const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your firstname? ', firstname => {
  readline.question('What is your lastname? ', lastname => {
    console.log('Hi ' + firstname + ' ' + lastname);
    readline.close();
  })
});