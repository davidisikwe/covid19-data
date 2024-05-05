import { useEffect, useState } from 'react';
import TimePeriod from './TimePeriod';

const radioButtons = {
  hospitalization: [
    { id: 'county', label: 'County' },
    { id: 'state', label: 'State' },
  ],
  testPos: [{ id: 'hhs', label: 'HHS Region' }],
};

const Scale = ({ selectedView }) => {
  useEffect(() => {
    setSelectedRadio(
      radioButtons[selectedView] ? radioButtons[selectedView][0].id : ''
    );
  }, [selectedView]);

  const [selectedRadio, setSelectedRadio] = useState('');

  return (
    <>
      <div>
        {radioButtons[selectedView] && (
          <div className='font-bold text-lg'>Scale:</div>
        )}
        {radioButtons[selectedView] &&
          radioButtons[selectedView].map(({ id, label }) => (
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
      <TimePeriod selectedOptions={`${selectedView}-${selectedRadio}`} />
    </>
  );
};

export default Scale;
