// Description:
//   Hubot cambia el mensaje a jerigonza
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot jerigonza <mensaje>
//
// Author:
//   @keld0r

function jerigonza(phrase)
{
	let message = phrase.toLowerCase();
	const vowels = ['a','e','i','o','u','\xe1','\xe9','\xed','\xf3','\xfa'];
	const vowelsReplace = [
		'apa',
		'epe',
		'ipi',
		'opo',
		'upu',
		'\xe1p\xe1',
		'\xe9p\xe9',
		'\xedp\xed',
		'\xf3p\xf3',
		'\xfap\xfa'
	];
	for(i = 0; i < vowels.length; i++){
		let re = new RegExp(vowels[i], "g");
		message = message.replace(re,vowelsReplace[i]);
	}
  return message;
}

module.exports = function(robot) {
  robot.respond(/en jerigonza (.*)/i, function(res) {
    let phrase = res.match[1];
    res.send(jerigonza(phrase));
  });
};
