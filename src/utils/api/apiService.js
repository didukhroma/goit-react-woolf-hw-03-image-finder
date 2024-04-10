import axios from 'axios';
import { BASE_URL, API_KEY } from '../../settings/settings';
const options = {
  imageType: 'photo',
  orientation: 'horizontal',
  resultsPerPage: 12,
};

const apiService = async (query, page) => {
  const request = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${options.imageType}&orientation=${options.orientation}&per_page=${options.resultsPerPage}`;

  try {
    const response = axios.get(request);
    const {
      data: { hits },
    } = response;
    return hits;
  } catch (error) {
    alert('Please enter a more specific word');
    return null;
  }
};

export default apiService;
