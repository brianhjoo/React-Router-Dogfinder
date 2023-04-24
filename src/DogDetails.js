import { useParams } from 'react-router-dom';


/** Details about a single dog
 *
 * Props:
 *  - dog: data about a single dog
 *
 * State: none
 *
 * App --> DogList --> DogDetails
 */
function DogDetails() {
  const { name } = useParams();

  console.log("name", name);

  return (
    <div className='DogDetails'>
      <h2>{ name }</h2>
      <img src={`./public/${name}`} alt={`dog ${name}`} />
    </div>
  );
}


export default DogDetails;