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
  {
    state: 'Alabama',
    capital: 'Montgomery'
  },
  {
    state: 'Alaska',
    capital: 'Juneau'
  },{
    state: 'Arizona',
    capital: 'Phoenix'
  },
  {
    state: 'Arkansas',
    capital: 'Little Rock'
  },
  {
    state: 'Colorado',
    capital: 'Denver'
  },
  {
    state: 'Connecticut',
    capital: 'Hartford'
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  },
  {
    state: '',
    capital: ''
  }
];

var DECK_LENGTH = flashcardsDictionary.length;

var handlers = {

  // Open Codecademy Flashcards
  'LaunchRequest': function() {
    if (Object.keys(this.attributes).length === 0) {
      this.attributes.flashcards = {
        'currentState': {
          'state': '',
          'capital': '',
          'numberCorrect': 0,
          'currentFlashcardIndex': 0

        }
        this.response.speak("Welcome home slice").listen(AskQuestion(this.attributes));
        // this.attributes.numberCorrect = 0;
        // this.attributes.currentFlashcardIndex = 0;
      }
    }
    else {
        this.response.speak("Welcome back to Flashcards. You are on question " + currentFlashcardIndex + "and have answered " + numberCorrect +  "correctly. " + AskQuestion).listen(AskQuestion);

      }
      this.emit(':responseReady');
  }, 


  // User gives an answer
  'AnswerIntent': function() {
    var currentFlashcardIndex = this.attributes.flashcards.currentFlashcardIndex;   
    var userAnswer = this.event.request.intent.slots.answer.value;
    var correctAnswer = flashcardsDictionary[currentFlashcardIndex];
    if (userAnswer === correctAnswer) {
      this.attributes.flashcards.numberCorrect++;
      this.attributes.flashcards.currentFlashcardIndex++;
    } else {
      this.response.speak("You were wrong, the next quesion is" + AskQuestion);
      this.attributes.flashcards.currentFlashcardIndex++;
    }

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


