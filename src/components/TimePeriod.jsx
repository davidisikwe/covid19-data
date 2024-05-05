import { useEffect, useState } from 'react';
import Metric from './Metric';

const radioButtons = {
  'hospitalization-county': [{ id: 'pastWeek', label: 'In Past Week' }],
  'hospitalization-state': [
    { id: 'pastWeek', label: 'In Past Week' },
    { id: 'aug2020', label: 'Since Aug 1, 2020' },
  ],
  'deaths-': [
    { id: 'pastWeek', label: 'In Past Week' },
    { id: 'past3Months', label: 'Past 3 Months' },
    { id: 'jan2020', label: 'Since Jan 1, 2020' },
  ],
  'emergency-': [{ id: 'pastWeek', label: 'In Past Week' }],
  'testPos-hhs': [
    { id: 'pastWeek', label: 'In Past Week' },
    { id: 'past2Week', label: 'In Past 2 Weeks' },
    { id: 'past4Week', label: 'In Past 4 Weeks' },
  ],
};

const TimePeriod = ({ selectedOptions }) => {
  useEffect(() => {
    setSelectedRadio(
      radioButtons[selectedOptions] ? radioButtons[selectedOptions][0].id : ''
    );
  }, [selectedOptions]);

  const [selectedRadio, setSelectedRadio] = useState('');
  return (
    <>
      <div>
        {radioButtons[selectedOptions] && (
          <div className='font-bold text-lg'>Time period:</div>
        )}
        {radioButtons[selectedOptions] &&
          radioButtons[selectedOptions].map(({ id, label }) => (
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
      <Metric selectedOptions={`${selectedOptions}-${selectedRadio}`} />
    </>
  );
};

export default TimePeriod;
