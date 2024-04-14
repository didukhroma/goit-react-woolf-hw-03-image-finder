import axios from 'axios';
import { BASE_URL, API_KEY } from '../../settings/settings';
const options = {
  imageType: 'photo',
  orientation: 'horizontal',
  resultsPerPage: 12,
};

const getImagesAPI = async (query, page) => {
  const requestStr = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${options.imageType}&orientation=${options.orientation}&per_page=${options.resultsPerPage}`;

  const response = await axios.get(requestStr);
  const { data } = response;
  return data;
};

export default getImagesAPI;
