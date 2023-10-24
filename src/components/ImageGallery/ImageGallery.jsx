import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

import PropTypes from 'prop-types';

function ImageGallery({ gallery, onOpenPicture }) {
  return (
    <Gallery>
      {gallery.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          onOpenPicture={onOpenPicture}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  onOpenPicture: PropTypes.func,
};

export default ImageGallery;
