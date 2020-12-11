import React from 'react';
import './EnticingUnit.scss';

const EnticingUnitData = [
  {
    name: 'PAY LESS FOR INVITE',
    description: 'Team save 20% on each tournament invite',
  },
  {
    name: 'GET MORE PRIZE',
    description: 'Team owner get 30% instead 20% when play solo',
  },
  {
    name: 'FIND NEW FRIENDS',
    description: 'Every victory is a team work',
  },
];

const EnticingUnit = EnticingUnitData.map(({ name, description }) => {
  return (
    <div className="enticing-banner--unitContainer">
      <p className="enticing-banner--enticingText">{name}</p>
      <p className="enticing-banner--unitDescription">{description}</p>
    </div>
  );
});

export default EnticingUnit;
