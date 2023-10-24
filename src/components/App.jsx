import { useState, useEffect } from 'react';

//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

import PostsApiService from 'service/PostsApiService';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { Loader } from 'components/Loader/Loader';
import Modal from './Modal/Modal';
import { AppContent } from './App.styled';

function App() {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);
  const [largeImage, setLargeImage] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchGallary();
  }, [searchQuery]);

  const fetchGallary = () => {
    setShowLoader(true);

    PostsApiService(searchQuery, page)
      .then(({ hits, total }) => {
        setGallery(prev => [...prev, ...hits]);
        setPage(prev => prev + 1);
        setTotal(total);

        scrollToDown();
      })
      .catch(error => setError(error))
      .finally(() => setShowLoader(false));
  };

  const scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleFormSubmit = query => {
    if (query === searchQuery) {
      return;
    }

    setSearchQuery(query);
    setGallery([]);
    setPage(1);
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleOpenPicture = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  const showLoadMore = () => {
    return Math.ceil(total / 12) !== page - 1;
  };

  return (
    <AppContent>
      <Searchbar onSubmit={handleFormSubmit} />

      {error && <p>{error.message}</p>}

      {gallery.length > 0 && (
        <ImageGallery gallery={gallery} onOpenPicture={handleOpenPicture} />
      )}

      {gallery.length > 0 && !showLoader && showLoadMore() && (
        <Loader onLoadMore={fetchGallary} />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </Modal>
      )}
    </AppContent>
  );
}

export default App;
