import { nanoid } from 'nanoid';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export default function ImageGallery({ images, toggleModal }) {
  return (
    <StyledList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={`${id}${nanoid()}`}
          source={webformatURL}
          text={tags}
          modalImg={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </StyledList>
  );
}
