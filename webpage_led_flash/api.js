// this is a security thing is needed for the webserver and api to work on the same machine
const cors = require('cors');
// node-rpio
const rpio = require('./node_modules/rpio');

// express.js handles all the api stuff
const express = require('./node_modules/express');
const app = express();

/*
* Configure the pin for output, setting it low initially.  The state is set
* prior to the pin being activated, so is suitable for devices which require
* a stable setup.
*/
const pin = 37;
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

// allow the website
app.use(cors({
  origin: [
    'https://nutchos.net/',
    'https://nutchos.net/api/'
  ]
}));

app.get('/', (req, res) => {
  console.log(morseString);
  res.send('<html>hello world<html>');
});

app.get('/blink', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  /*
   * Blink the LED 5 times.  The sleep functions block, but for a trivial example
   * like this that isn't a problem and simplifies things.
   */
  for (var i = 0; i < 5; i++) {
  
          /* On for 1 second */
          rpio.write(pin, rpio.HIGH);
          rpio.sleep(1);
  
          /* Off for half a second (500ms) */
          rpio.write(pin, rpio.LOW);
          rpio.msleep(500);
  }
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log();
});
