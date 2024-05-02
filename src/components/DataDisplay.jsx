import React from 'react';
import Card from './Card';

const DataDisplay = () => {
  return (
    <div className='bg-[#cce5e9] w-[70%] p-5'>
      <div className='flex justify-evenly gap-5 flex-col lg:flex-row'>
        <Card heading='covid' stats='3%' />
        <Card heading='covid' stats='3%' />
        <Card
          heading='COVID-19 HOSPITAL ADMISSIONS PER 100,000 (PAST WEEK)'
          stats='3%'
        />
      </div>
      <div className='text-right pt-2 text-xs text-[#111111]'>
        CDC | Data through: April 20, 2024. Posted: April 29, 2024
      </div>
    </div>
  );
};

export default DataDisplay;
