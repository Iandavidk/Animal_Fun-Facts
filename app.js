import React from 'react';
import ReactDOM from 'react-dom';
import { animals } from './animals';

const title = "";

const background = 
<img 
  src="./images/ocean.jpg" 
  className="background" 
  alt="ocean"
/>

const images =[];

for(const animal in animals){
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      arialabel={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
<div> 
  <h1>{title == "" ? "Click an animal for a fun fact!" : title}
  </h1>
  {background}
  <p id="fact"></p>
  <div className='animals'>
    {images}
  </div>
</div> 
);



ReactDOM.render(animalFacts, document.getElementById("root"));

