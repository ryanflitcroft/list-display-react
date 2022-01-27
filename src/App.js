import logo from './logo.svg';
import './App.css';
// import your arrays here
import { cities } from './Cities/city-data';
import { greetings } from './Greetings/greetings-data';
import { emoticons } from './Emoticons/emoticons-data';

import EmoticonsList from './Emoticons/EmoticonsList';
import CityList from './Cities/CityList';
import GreetingsList from './Greetings/GreetingsList';


function App() {

  return (
    <div className="App">
      <EmoticonsList emoticons={emoticons} />
      <GreetingsList greetings={greetings} />
      <CityList cities={cities} />
    </div>
  );
}

export default App;
