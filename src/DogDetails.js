import { useParams } from 'react-router-dom';


/** Details about a single dog
 *
 * Props: none
 *
 * State: none
 *
 * App --> DogList --> DogDetails
 */
function DogDetails() {
  const { name } = useParams();

  return (
    <div className='DogDetails'>
      <h2>{ name }</h2>
      <img src={`./public/${name}`} alt={`dog ${name}`} />
    </div>
  );
}


export default DogDetails;