import DogDetails from './DogDetails';
import { useState } from 'react-router-dom';
import { getAllDogs } from './api';

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
function DogList() {
  const [dogsInfo, setDogsInfo] = useState(null);

  async function getDogs(){
    const dogs = await getAllDogs();

    setDogsInfo(dogs);
  }

  return (
    <div className="DogList">I'm a doglist</div>
  );
}


export default DogList;