// import React from 'react';
// import { useState } from 'react';
// import HospitSelect from './HospitSelect';

// const radioButtons = [
//   {
//     id: 'hospitalization',
//     label: 'Hospitalization',
//     childRadio: [
//       {
//         id: 'county',
//         label: 'County',
//       },
//       {
//         id: 'state',
//         label: 'State',
//       },
//     ],
//   },

//   {
//     id: 'deaths',
//     label: 'Deaths',
//   },
//   {
//     id: 'emergency',
//     label: ' Emergency Department Visits',
//   },
//   {
//     id: 'test-pos',
//     label: 'Test Positivity',
//   },
// ];

// const Selectors = () => {
//   const [selectedRadio, setSelectedRadio] = useState('hospitalization');

//   return (
//     <div className='bg-[#ebf5f6] w-[70%] p-5 h-[23rem]'>
//       <div className='font-bold text-lg'>View:</div>
//       {radioButtons.map(({ id, label }) => (
//         <div
//           className='flex gap-1'
//           key={id}
//           onClick={() => setSelectedRadio(id)}
//         >
//           <input
//             type='radio'
//             id={id}
//             checked={selectedRadio === id}
//             onChange={() => {}}
//           />
//           <label className='text-lg' htmlFor={id}>
//             {label}
//           </label>
//         </div>
//       ))}
//       {/* {selectedRadio === 'hospitalization' && (
//         <>{radioButtons['hospitalization']}</>
//       )} */}
//       {selectedRadio === 'hospitalization' && (
//         <>{radioButtons['hospitalization']}</>
//       )}
//     </div>
//   );
// };

// export default Selectors;

import View from './View';

const Selector = () => {
  return (
    <div className='bg-[#ebf5f6] p-5 flex gap-10 flex-wrap'>
      <View />
    </div>
  );
};

export default Selector;
