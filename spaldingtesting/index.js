'use strict'

var Alexa = require("alexa-sdk");

var dictionary = [

this.attributes.
	'numbervalues': {
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9 
	}

];

var handlers = {
	'LaunchRequest': function() {
		this.attributes.numberValues = {

			'numbervalues': {
					'one': 1,
					'two': 2,
					'three': 3,
					'four': 4,
					'five': 5,
					'six': 6,
					'seven': 7,
					'eight': 8,
					'nine': 9 
				}
		}
	
		this.response.speak("Hello, begin by saying a number").listen('what was that?');
		var userInput = this.event.request.intent.slots.userinput.value;
		var equatedFunction = numbervalues[Math.Floor(Math.Random * 9)]

		if (userInput === equatedFunction) {

			this.response.speak(userinput + "is the total").listen("what is the next question?");

		} else {
			this.response.speak("broken ass function").listen("another attempt?");

		}
		this.emit(":responseReady");


	'CalculatorIntent': function () {



	}

	},

};





exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.dynamoDBTableName = 'WorkingBank';
    alexa.registerHandlers(handlers);
    alexa.execute();
  };
