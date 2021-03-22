import React from 'react';
import InterestItem from './InterestItem';

const MainInterestsList = ({ mainInterests }) => (
  <>
    <h2>Main Interests</h2>
    <ul>
      {mainInterests.map(interest => <InterestItem interest={interest} key={interest}/>)}
    </ul>
  </>
);

export default MainInterestsList;