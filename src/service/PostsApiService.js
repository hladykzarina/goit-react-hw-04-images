import axios from 'axios';

const PostsApiService = (searchQuery, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '39231983-3a5a24849d135b109e286581a';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default PostsApiService;
