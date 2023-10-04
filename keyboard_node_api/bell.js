// this is needed to run commands like in a terminal
const { spawn } = require('node:child_process');

// this function gets the command line to play a system sound
const ringBell = () => {
  const ding = spawn('/usr/bin/ogg123', ['/usr/share/sounds/freedesktop/stereo/service-login.oga']);
  //
  ding.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  //
  ding.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  //
  ding.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  //
}

ringBell();