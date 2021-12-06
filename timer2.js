const readline = require('readline');
const stdin = process.stdin;
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});
  
  process.stdout.write('Waiting for input...\n')

  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'b') {
      process.stdout.write(`\x07\n`);
    }
    if (key.ctrl && key.name === 'c') {
      process.stdout.write('Thanks for using me, ciao!\n')
      process.exit(); 
    }
    if (key.name === '1' || key.name === '2' || key.name === '3' || key.name === '4' || key.name === '5' || key.name === '6' || key.name === '7' || key.name === '8' || key.name === '9') {
      process.stdout.write(`\nSetting timer for ${key.name} seconds...\n`)
      setTimeout(() => {
        process.stdout.write(`\x07Timer has finished...\n`)
      }, key.name * 1000);
    }
  });
