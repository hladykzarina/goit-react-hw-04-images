import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

function ImageGalleryItem({ picture, onOpenPicture }) {
  return (
    <GalleryItem
      onClick={() => {
        onOpenPicture(picture);
      }}
    >
      <GalleryImg src={picture.webformatURL} alt={picture.tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.object,
  onOpenPicture: PropTypes.func,
};

export default ImageGalleryItem;
