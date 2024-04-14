import { StyledIMG, StyledItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  source,
  text,
  modalImg,
  toggleModal,
}) {
  const handleClick = () => toggleModal(modalImg, text);

  return (
    <StyledItem onClick={handleClick}>
      <StyledIMG src={source} alt={text} />
    </StyledItem>
  );
}
