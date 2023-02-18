import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  h2 {
    text-transform: capitalize;
    font-size: 30px;
    color: var(--main);
  }
`;

export default Loading;
