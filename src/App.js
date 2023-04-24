import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DogList from './DogList.js';
import DogDetails from './DogDetails';
import { getAllDogs } from './api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={ <DogList dogs={getAllDogs()} />} />
          <Route path="/dogs/:name" element={ <DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
