import './App.css';
import DataDisplay from './components/DataDisplay';
import Selectors from './components/Selectors';

const App = () => {
  return (
    <div className='px-5 flex justify-center flex-col gap-5 items-center'>
      <DataDisplay />
      <Selectors />
    </div>
  );
};

export default App;
