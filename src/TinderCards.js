import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

function TinderCards() {
  const [people, setPeople] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/tinder/cards');
      console.log('res', res);
      setPeople(res.data);
    }
    fetchData();
  }, []);
  console.log('people', people);
  const swiped = (direction, nameToDelete) => {
    console.log('removing', nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name, ' Left the screen');
  };
  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people
          ? people.map((person) => (
              <TinderCard
                className='swipe'
                key={person.id}
                preventSwipe={['up', 'down']}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: `url(${person.imgUrl})` }}
                  className='card'
                >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            ))
          : null}
      </div>
    </div>
  );
}

export default TinderCards;
