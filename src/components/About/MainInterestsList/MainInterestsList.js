import InterestItem from '@/components/About/MainInterestsList/InterestItem/InterestItem';
import React from 'react';

const MainInterestsList = ({ mainInterests }) => (
  <>
    <h2>Main Interests</h2>
    <ul>
      {mainInterests.map(interest => <InterestItem interest={interest} key={interest}/>)}
    </ul>
  </>
);

export default MainInterestsList;