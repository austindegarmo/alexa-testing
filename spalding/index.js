
/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
var APP_ID = undefined;

var SKILL_NAME = 'Space Facts';
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

// //=========================================================================================================================================
// //TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
// //=========================================================================================================================================
var data = [
    'A year on Mercury is just 88 days long.',
    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
    'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
    'On Mars, the Sun appears about half the size as it does on Earth.',
    'Earth is the only planet not named after a god.',
    'Jupiter has the shortest day of all the planets.',
    'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
    'The Sun contains 99.86% of the mass in the Solar System.',
    'The Sun is an almost perfect sphere.',
    'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
    'Saturn radiates two and a half times more energy into space than it receives from the sun.',
    'The temperature inside the Sun can reach 15 million degrees Celsius.',
    'The Moon is moving approximately 3.8 cm away from our planet every year.',
];


//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================



var handlers = {
    'LaunchRequest': function () {
        this.response.speak("Ready to try again? Who would you like to know about?").listen();
        this.emit(":responseReady");
    },


    'SelectIndividualIntent': function () {
        var individual = this.event.request.intent.slots.person.value;         
        if (individual == "George bush") {

            this.response.speak("A not cool person");
        }
        else{
            this.response.speak("go fuck yourself");
        }
        this.emit(":responseReady");
    },

    'SelectHousemateIntent': function () {
        var guy = this.event.request.intent.slots.dude.value;
        if (guy == "Morgan fryman") {

            this.response.speak("Skate or die");
        }
        else{
            this.response.speak("didn't work again");
        }
        this.emit(":responseReady");
    },

    'SelectBrettIntent': function () {
        var dough = this.event.request.intent.slots.doughnut.value;
        if (dough == "bear claw") {
            this.response.speak("An artist who grows dope weed");
        }
        else {
            this.response.speak("didn't work ");
        }
        this.emit(":responseReady");

    },

    'SelectJoeyIntent': function () {
        var guns = this.event.request.intent.slots.hearthstone.value;
        if (guns == "Joe Maxey") {
            this.response.speak("Joey's function worked");
        } else {
            this.response.speak("nope, not today");
        }
        this.emit("responseReady");
    },

    'SelectCraigIntent': function () {
        var cheese = this.event.request.intent.slots.ranchme.value;
        if (cheese == "craig yannow") {
            this.response.speak("what's up simple simon? I just got back from the legalize herion convention. yo, three eleven never happened. buzz me mulatto.");
        } else {
            this.response.speak("no ranch for you");
        }
        this.emit(":responseReady");
    },

    'SelectChristopherIntent': function () {
        var veg = this.event.request.intent.slots.uglyproduce.value;
        if (veg == "Christopher Steiner") {
            this.response.speak("vegetable gang");
        } else {
            this.response.speak("no veggie tales for you");
        }
        this.emit(":responseReady");
    },

    'SelectEricIntent': function () {
        var drank = this.event.request.intent.slots.whiskey.value;
        if (drank == "Eric Freedman") {
            this.response.speak("Looking like vegeta ass mother fucker. Doesn't like baseball because he's lame. Doesn't drink whiskey because he prefers wine.");
        } else {
            this.response.speak("kakarot no");
        }
        this.emit(":responseReady");
    },

    'SelectJaredIntent': function () {
        var taco = this.event.request.intent.slots.beardstache.value;
        if (taco == 'Jared smith') {
            this.response.speak("Beard therapy");
        } else {
            this.response.speak("obama bin laden");
        }
        this.emit("responseReady");
    },
 
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
}

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
