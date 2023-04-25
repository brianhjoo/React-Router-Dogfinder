import DogDetails from './DogDetails';
import { useState } from 'react';
import { getAllDogs } from './api';
import { Link } from 'react-router-dom';

/** Display List of all the dogs
 *
 * Props:
 *  -dogs [{ name, age, facts }...]
 *
 * State none
 *
 * Dogs --> DogList --> DogDetails
 */

function DogList({ dogs }) {

  function showDogsLinks() {
    return dogs.map(({ name, age, facts }, i) => {
      return (
        <div key={i}>
          <Link to={`./dogs/${name}`}>
            <img src={`./${name}.jpg`} alt={`dog ${name}`} />
            <h2>{name}</h2>
          </Link>
        </div>
      );
    });
  }

  return (
    <div className="DogList">
      <div>{showDogsLinks()}</div>
    </div>
  );
}

export default DogList;