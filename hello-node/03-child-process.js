// Credit to Mark Hellar for this example 😎
const exec = require('child_process').exec;

// a list of voices can be found here:
// https://gist.github.com/mculp/4b95752e25c456d425c6
function say(msg, name) {
  exec('say -v Sam ' + msg + ' ' + name);
}

say('Hello nice to meet you', 'Rachel');