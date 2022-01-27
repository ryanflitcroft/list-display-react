import logo from './logo.svg';
import './App.css';
// import your arrays here
import { cities } from './Cities/city-data';
import CityList from './Cities/CityList';

function App() {

  return (
    <div className="App">
      <CityList cities={cities} />
    </div>
  );
}

export default App;
