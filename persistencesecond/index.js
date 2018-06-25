'use strict';

var Alexa = require('alexa-sdk');

var flashcardsDictionary = [
  {
    state: 'California',
    capital: 'Sacramento'
  },
  {
    state: 'Hawaii',
    capital: 'Honolulu'
  },
];

var DECK_LENGTH = flashcardsDictionary.length;

var handlers = {

  // Open Codecademy Flashcards
  'LaunchRequest': function() {

  },

  // User gives an answer
  'AnswerIntent': function() {

  },


  // Stop
  'AMAZON.StopIntent': function() {
    this.response.speak('Ok, let\'s play again soon.');
    this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
    this.response.speak('Ok, let\'s play again soon.');
    this.emit(':responseReady');
  },

  // Save state
  'SessionEndedRequest': function() {
    console.log('session ended!');
    this.emit(':saveState', true);
  }

};

// Test my {language} knowledge
var AskQuestion = function(attributes) {
  var currentFlashcardIndex = attributes.flashcards.currentFlashcardIndex;

  if (currentFlashcardIndex >= DECK_LENGTH) {
    return 'No questions remaining.';
  } else {
    var currentState = flashcardsDictionary[currentFlashcardIndex].state;
    return 'What is the capital of ' + currentState + '?';
  }

};

  exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);

    alexa.registerHandlers(handlers);
    alexa.execute();
  };


