// Custom command for converting your JS to be put in a CC
// Not ready - needs unicode codes inserted

let startBracket = "\\uSB";
let endBracket = "\\uEB";
let quote = "\\uQUOT";
let converted = args.str.replace(new RegExp('\\' + eval(startBracket), 'g'), startBracket).replace(new RegExp('\\' + eval(startBracket), 'g'), endBracket).replace(/\n/g, "\\n").replace(/"/g, quote);
eval(startBracket) + 'eval("' + converted + '")' + eval(endBracket);

// Minified
// V Copy/Paste Me! V
// (prefix)cc create minify {let startBracket="\\uSB";let endBracket="\\uEB";let quote="\\uQUOT";let converted=args.str.replace(new RegExp('\\'+eval(startBracket),'g'),startBracket).replace(new RegExp('\\'+eval(startBracket),'g'),endBracket).replace(/\n/g,"\\n").replace(/"/g,quote);eval(startBracket)+'eval("'+converted+'")'+eval(endBracket);}
// ^       ^        ^