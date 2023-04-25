import { useParams } from 'react-router-dom';


/** Details about a single dog
 *
 * Props:
 * -dogs [{ name, age, facts }...]
 *
 * State: none
 *
 * App --> DogList --> DogDetails
 */
function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(d => d.name === name);

  return (
    <div className='DogDetails'>
      <h2>{ name }</h2>
      <img src={`./${name}.jpg`} alt={`dog ${name}`} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map(f => {
          <li>{f}</li>
        })}
      </ul>
    </div>
  );
}


export default DogDetails;