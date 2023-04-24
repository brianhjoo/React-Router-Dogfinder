import axios from "axios";

const BASE_URL = "http://localhost:5001";

/** getAllDogs
 * API call to get info on all dogs
 *
 * expected info:
 *
*/

async function getAllDogs() {
  const response = await axios.get(`${BASE_URL}/dogs`);

  return response.data;
}

export { getAllDogs };