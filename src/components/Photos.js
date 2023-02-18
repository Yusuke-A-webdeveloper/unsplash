import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import SinglePhoto from './SinglePhoto';

const Photos = () => {
  const { loading, photos } = useGlobalContext();

  return (
    <Wrapper>
      <div className="photo-con">
        {photos.map((photo, index) => {
          return <SinglePhoto {...photo} key={index} />;
        })}
      </div>
      {loading && <Loading />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin-top: 80px;
  width: 100%;
  .photo-con {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export default Photos;
