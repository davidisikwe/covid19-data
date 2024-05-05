import { useEffect, useState } from 'react';
import Measure from './Measure';

const radioButtons = {
  'hospitalization-county-pastWeek': [
    { id: 'newHospAdm', label: 'COVID-19 new hospital admissions' },
    { id: 'inpatOcc', label: 'Inpatient beds occupied by COVID-19 patients' },
    { id: 'icuOcc', label: 'ICU beds occupied by COVID-19 patients' },
  ],
  'hospitalization-state-pastWeek': [
    { id: 'newHospAdm', label: 'COVID-19 new hospital admissions' },
    { id: 'inpatOcc', label: 'Inpatient beds occupied by COVID-19 patients' },
    { id: 'icuOcc', label: 'ICU beds occupied by COVID-19 patients' },
  ],
  'hospitalization-state-aug2020': [
    { id: 'hospAdm', label: 'COVID-19 hospital admissions' },
  ],
  'deaths--pastWeek': [
    { id: 'percDeaths', label: '% of deaths due to COVID-19' },
  ],
  'deaths--past3Months': [
    { id: 'past3MCount', label: 'Count' },
    { id: 'per1k', label: 'Rate per 100,000 (age adjusted)' },
  ],
  'deaths--jan2020': [
    { id: 'jan2020Count', label: 'Count' },
    { id: 'per1k', label: 'Rate per 100,000 (age adjusted)' },
  ],
  'emergency--pastWeek': [
    { id: 'percEDVisit', label: '% of ED visits diagnosed as COVID-19' },
    {
      id: 'percChange',
      label:
        ' Percent change, % of ED visits diagnosed as COVID-19 from prior week',
    },
  ],
  'testPos-hhs-pastWeek': [
    { id: 'testPosPerc', label: 'Test positivity (%), past week' },
    {
      id: 'testPosPercChange',
      label: ' % Change in % positivity from prior week',
    },
  ],
};

const Metric = ({ selectedOptions }) => {
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
          <div className='font-bold text-lg'>Metric:</div>
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
      <Measure selectedOptions={`${selectedOptions}-${selectedRadio}`} />
    </>
  );
};

export default Metric;
