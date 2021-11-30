const num = process.argv.slice(2);

for (timer of num) {
  let timerNum = Number(timer);
  if (timerNum >= 0)
  setTimeout(() => {
    process.stdout.write(`\x07`);
  }, timerNum * 1000);
  
}
