const makeApi = (
  input,
) => {
  console.log(`document.getElementById(\'key_${input}\').addEventListener(\'click\', () => {`);
  console.log(`  fetch(\'https://api.nutchos.net/key_${input}\').then((response) => console.log(response));`);
  console.log('});');
  console.log('');
}

const letters = 'abcdefghijklmnopqrstuvwxyz';
let character = '';
for (let i = 0; i < letters.length; i++) {
  character = letters.charAt(i);
  makeApi(character);
}
makeApi('space');
makeApi('enter');