import axios from 'axios';

export const getImages = async (query, page) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '39231983-3a5a24849d135b109e286581a',
      q: query,
      page: page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data;
};
