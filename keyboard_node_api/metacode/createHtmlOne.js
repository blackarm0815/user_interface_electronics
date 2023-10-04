const makeApi = (
  input,
  sized,
) => {
  if (sized) {
    console.log(`<button id = \'key${input}\' type=\'button\' class = \'letterButton\' >`);
  } else {
    console.log(`<button id = \'key${input}\' type=\'button\' class = \'letterOther\' >`);
  }
  console.log(`  ${input}`);
  console.log('</button>');
  console.log();
}

const letters = 'qwertyuiopasdfghjklzxcvbnm';
let character = '';
for (let i = 0; i < letters.length; i++) {
  character = letters.charAt(i);
  makeApi(character, true);
}
makeApi('space', false);
makeApi('enter', false);