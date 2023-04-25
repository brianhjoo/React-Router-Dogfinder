import DogList from './DogList';
import { useState } from 'react';
import { getAllDogs } from './api';

/** fetch info for all dogs
 *
 * Props none
 *  -
 *
 * State:
 *  -dogInfo
 *
 * App --> Dogs
 */
function Dogs() {
  const [dogInfo, setDogInfo] = useState(null);

  async function getDogs() {
    const dogs = await getAllDogs();

    setDogInfo(dogs);
  }

  getDogs();

  return (
    <div className="Dogs">
      {dogInfo
        ?
        <DogList dogs={dogInfo} />
        :
        <p>Loading...</p>
      }
    </div>
  );
}


export default Dogs;