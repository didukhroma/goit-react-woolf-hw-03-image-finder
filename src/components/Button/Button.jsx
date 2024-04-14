import { StyledButton } from './Button.styled';

export default function Button({ cbOnClick }) {
  return <StyledButton onClick={cbOnClick}>Load More</StyledButton>;
}
