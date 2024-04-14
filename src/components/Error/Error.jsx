import { StyledP } from './Error.styled';

export default function Error({ message }) {
  return (
    <>
      <StyledP>{message}</StyledP>
      <StyledP>Please try again</StyledP>
    </>
  );
}
