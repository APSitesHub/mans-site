import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#0046b3', '#003b99', '#002f7a', '#003b99', '#0046b3']}
      />
    </LoaderWrapper>
  );
};
