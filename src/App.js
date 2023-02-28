import Weather from './Components/Weather'
import WeatherState from './Context/WeatherState';

function App() {
  return (
    <div className='flex justify-center items-center bg-slate-900'>
      <WeatherState>
        <Weather />
      </WeatherState>
    </div>
  );
}

export default App;
