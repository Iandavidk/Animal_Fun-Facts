(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var animals = exports.animals = {
      dolphin: {
        image: '/images/dolphin.jpg',
        facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!', 'Dolphins are highly intelligent and are often considered one of the most intelligent animals in the world.', 'Dolphins have a unique method of hunting known as "herding" where they work together to surround and trap their prey.', 'Dolphins have a layer of blubber under their skin that helps keep them warm in cold water.', 'Dolphin ears are located on the sides of their head, and they use echolocation to navigate and communicate.', 'Baby dolphins are called "calves" and are typically born weighing between 25-50 pounds.', 'Some species of dolphins are known to live in groups of up to 100 individuals called "schools" or "pods".', 'Dolphin teeth are cone-shaped and used for catching and holding onto their prey, but they do not chew their food.', 'Some species of dolphins can live to be over 50 years old.', 'Dolphins have a wide variety of vocalizations, including clicks, whistles, and other sounds that they use for communication.', 'Dolphins are often considered to be playful animals, and they are known to engage in activities such as surfing and jumping out of the water for fun.']
      },
      lobster: {
        image: '/images/lobster.jpg',
        facts: ['Lobsters are invertebrates, meaning they do not have a backbone.', 'Lobsters have a hard exoskeleton that they must shed and replace as they grow.', 'Lobsters are carnivores and typically eat fish, mollusks, and other crustaceans.', 'Lobsters have two large claws that they use for catching and crushing their food.', 'Lobsters can live to be over 100 years old in some cases.', 'Lobsters are considered a delicacy and are often served in fine dining restaurants.', 'Lobsters have a complex nervous system and are capable of feeling pain.', 'Lobsters can regenerate lost body parts, including their claws and legs.', 'Lobsters are typically found in the ocean, but some species live in fresh water.', 'Lobsters are an important part of the ocean ecosystem, serving as both predators and prey.']
      },
      starfish: {
        image: '/images/starfish.jpg',
        facts: ['Starfish, also known as sea stars, are not actually fish at all, but are echinoderms.', 'Starfish have a unique ability to regenerate lost arms, and in some cases, can even regrow a new body from just a single arm.', 'Starfish typically have five arms, but some species can have up to 40.', 'Starfish do not have brains, but instead have a decentralized nervous system.', 'Starfish have an amazing ability to adapt to a wide variety of environments, from shallow coral reefs to the deep sea.', 'Starfish use their arms to move along the ocean floor, and some species can even swim.', 'Starfish are carnivorous and feed on a variety of prey, including mollusks, crustaceans, and small fish.', 'Starfish are important predators in the ocean and play a crucial role in maintaining the balance of marine ecosystems.', 'Some species of starfish are toxic and can cause severe poisoning if eaten by humans.', 'Starfish have been around for millions of years and are some of the oldest living animals on Earth.']
      }
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _react = require('react');
    
    var _react2 = _interopRequireDefault(_react);
    
    var _reactDom = require('react-dom');
    
    var _reactDom2 = _interopRequireDefault(_reactDom);
    
    var _animals = require('./animals');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var title = "";
    
    var background = _react2.default.createElement('img', {
      src: './images/ocean.jpg',
      className: 'background',
      alt: 'ocean'
    });
    
    var images = [];
    
    for (var animal in _animals.animals) {
      images.push(_react2.default.createElement('img', {
        key: animal,
        className: 'animal',
        alt: animal,
        src: _animals.animals[animal].image,
        arialabel: animal,
        role: 'button',
        onClick: displayFact
      }));
    }
    
    function displayFact(e) {
      var selectedAnimal = e.target.alt;
      var animalInfo = _animals.animals[selectedAnimal];
      var optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    
      var funFact = animalInfo.facts[optionIndex];
      document.getElementById('fact').innerHTML = funFact;
    }
    
    var animalFacts = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title == "" ? "Click an animal for a fun fact!" : title
      ),
      background,
      _react2.default.createElement('p', { id: 'fact' }),
      _react2.default.createElement(
        'div',
        { className: 'animals' },
        images
      )
    );
    
    _reactDom2.default.render(animalFacts, document.getElementById("root"));
    
    },{"./animals":1,"react":undefined,"react-dom":undefined}]},{},[2]);
    