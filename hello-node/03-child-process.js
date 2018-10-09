// Credit to Mark Hellar for this example 😎
const exec = require('child_process').exec;

function say(msg, name) {
  exec('say ' + msg + ' ' + name);
}

say('Hello nice to meet you', 'Rachel');