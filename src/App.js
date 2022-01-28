import './App.css';
import { cities } from './Cities/city-data';
import { greetings } from './Greetings/greetings-data';
import { emoticons } from './Emoticons/emoticons-data';
import { bands } from './Bands/bands-data';

import EmoticonsList from './Emoticons/EmoticonsList';
import CityList from './Cities/CityList';
import GreetingsList from './Greetings/GreetingsList';
import BandsList from './Bands/BandsList';


function App() {

  console.log('||greetings-data: ', greetings);
  return (
    <div className="App">
      <EmoticonsList emoticons={emoticons} />
      <GreetingsList greetings={greetings} />
      <CityList cities={cities} />
      <BandsList bands={bands} />
    </div>
  );
}

export default App;
