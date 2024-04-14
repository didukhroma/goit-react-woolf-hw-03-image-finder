import { InfinitySpin } from 'react-loader-spinner';
import { StyledDiv } from './Loader.styled';

export default function Loader() {
  return (
    <StyledDiv>
      <InfinitySpin
        visible={true}
        width="200"
        height="800"
        color="#3f51b5"
        ariaLabel="infinity-spin-loading"
      />
    </StyledDiv>
  );
}
