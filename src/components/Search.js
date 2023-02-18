import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { useGlobalContext } from '../context';

const Search = () => {
  const { handleSubmit, query, queryChange } = useGlobalContext();

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => queryChange(e)}
        />
        <button>
          <BiSearchAlt />
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    position: relative;
    width: 600px;
    align-items: center;
    border-bottom: 4px solid grey;
    input {
      position: relative;
      width: 90%;
      font-size: 22px;
      padding: 10px 20px;
      border: none;
      text-transform: capitalize;
      color: var(--main);
    }
    button {
      position: relative;
      width: 10%;
      border: none;
      background: transparent;
      svg {
        font-size: 25px;
        position: relative;
        top: 5px;
        color: var(--main);
      }
    }
  }
  @media (max-width: 750px) {
    form {
      width: 100%;
    }
  }
`;

export default Search;
