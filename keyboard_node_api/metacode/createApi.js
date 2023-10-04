const makeApi = (
  input,
) => {
  console.log(`app.get(\'\/key${input}\', (req, res) => {`);
  console.log('  res.header("Access-Control-Allow-Origin", "*");');
  console.log('  res.header("Access-Control-Allow-Headers", "X-Requested-With");');
  console.log(`  morseString += \'${input}\';`);
  console.log('  console.log(morseString);');
  console.log(`  res.send(\'<html>${input}<html>\');`);
  console.log('});\n');
}

const letters = 'abcdefghijklmnopqrstuvwxyz';
let character = '';
for (let i = 0; i < letters.length; i++) {
  character = letters.charAt(i);
  makeApi(character);
}
makeApi('space');
makeApi('enter');