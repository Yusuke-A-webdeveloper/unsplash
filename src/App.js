import styled from 'styled-components';
import Search from './components/Search';
import Photos from './components/Photos';
// process.env.REACT_APP_ACCESS_KEY

function App() {
  return (
    <Wrapper>
      <Search />
      <Photos />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 75px auto 50px;
`;

export default App;
