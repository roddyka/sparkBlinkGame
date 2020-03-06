
// How to load in modules
export const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');


var counterNumber = Scene.root.find('number');
var scoreNumber = Patches.getScalarValue('score');
//var scoreNumber = Patches.getNumberValue('score'); 
 


counterNumber.text = scoreNumber.toString(); 
//Diagnostics.log(counterNumber.text);  