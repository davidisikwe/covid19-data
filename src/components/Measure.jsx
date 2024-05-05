import { useEffect, useState } from 'react';

const radioButtons = {
  'hospitalization-county-pastWeek-newHospAdm': [
    { id: 'newHospAdmCount', label: 'Count' },
    { id: 'newHospAdm1k', label: 'Rate per 100,000' },
    { id: 'newHospAdmPercChange', label: ' % Change from prior week' },
  ],
  'hospitalization-county-pastWeek-inpatOcc': [
    { id: 'inpatOccPercChange', label: ' % of total inpatient beds' },
    { id: 'inpatOccAbsChange', label: ' Absolute change in % from prior week' },
  ],
  'hospitalization-county-pastWeek-icuOcc': [
    { id: 'icuOccPerc', label: ' % of total ICU beds' },
    { id: 'icuOccAbsChange', label: ' Absolute change in % from prior week' },
  ],
  'hospitalization-state-pastWeek-newHospAdm': [
    { id: 'newHospAdmCount', label: 'Count' },
    { id: 'newHospAdm1k', label: 'Rate per 100,000' },
    { id: 'newHospAdmPercChange', label: ' % Change from prior week' },
  ],
  'hospitalization-state-pastWeek-inpatOcc': [
    { id: 'inpatOccPercChange', label: ' % of total inpatient beds' },
    { id: 'inpatOccAbsChange', label: ' Absolute change in % from prior week' },
  ],
  'hospitalization-state-pastWeek-icuOcc': [
    { id: 'icuOccPerc', label: ' % of total ICU beds' },
    { id: 'icuOccAbsChange', label: ' Absolute change in % from prior week' },
  ],
  'hospitalization-state-aug2020-hospAdm': [
    { id: 'hospAdmCount', label: ' Count' },
  ],
};

const Measure = ({ selectedOptions }) => {
  useEffect(() => {
    setSelectedRadio(
      radioButtons[selectedOptions] ? radioButtons[selectedOptions][0].id : ''
    );
  }, [selectedOptions]);

  const [selectedRadio, setSelectedRadio] = useState('');

  return (
    <div>
      {radioButtons[selectedOptions] && (
        <div className='font-bold text-lg'>Measure:</div>
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
  );
};

export default Measure;
