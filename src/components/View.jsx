import { useState } from 'react';
import Scale from './Scale';

const radioButtons = [
  {
    id: 'hospitalization',
    label: 'Hospitalization',
  },
  {
    id: 'deaths',
    label: 'Deaths',
  },
  {
    id: 'emergency',
    label: ' Emergency Department Visits',
  },
  {
    id: 'testPos',
    label: 'Test Positivity',
  },
];

const View = () => {
  const [selectedRadio, setSelectedRadio] = useState('hospitalization');

  return (
    <>
      <div>
        <div className='font-bold text-lg'>View:</div>
        {radioButtons.map(({ id, label }) => (
          <div
            className='flex gap-1'
            key={id}
            onClick={() => setSelectedRadio(id)}
          >
            <input
              type='radio'
              id={id}
              checked={selectedRadio === id}
              onChange={() => {}}
            />
            <label className='text-lg' htmlFor={id}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <Scale selectedView={selectedRadio} />
    </>
  );
};

export default View;
