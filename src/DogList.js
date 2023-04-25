import DogDetails from './DogDetails';
import { useState } from 'react';
import { getAllDogs } from './api';
import { Link } from 'react-router-dom';

/** List of all the dogs
 *
 * Props:
 *  -
 *
 * State:
 *  -dogsInfo
 *
 * App --> DogDetails
 */
function DogList({ dogs }) {
  const [dogsInfo, setDogsInfo] = useState(null);

  async function getDogs(){
    const dogs = await getAllDogs();

    setDogsInfo(dogs);
  }

  function showDogsLinks() {
    return dogsInfo.map(({name, age, facts}, i) => {
      return (
        <div key={i}>
          <Link to={`./dogs/${name}`}>
            <img src={`./${name}.jpg`} alt={`dog ${name}`} />
            <h2>{name}</h2>
          </Link>
          <p>age: {age}</p>
          <p>facts: {facts}</p>
        </div>
      );
    });
  }

  return (
    <div className="DogList">
      <button onClick={getDogs}>Get dogs</button>
      {!dogsInfo && <p>Loading...</p>}
      {dogsInfo && <div>{showDogsLinks()}</div>}
    </div>
  );
}


export default DogList;