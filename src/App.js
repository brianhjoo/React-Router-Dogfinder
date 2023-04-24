import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DogList from './DogList.js';
import DogDetails from './DogDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={ <DogList />} />
          <Route path="/dogs/:name" element={ <DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
