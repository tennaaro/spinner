process.stdout.write('hello from spinner2.js... \rheyyy\n');

let spinnerMoves = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerMoves[i] + '   ');
  }, 200 * (i + 1))
}