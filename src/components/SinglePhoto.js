import styled from 'styled-components';

const SinglePhoto = ({
  urls: { regular: image },
  alt_description: desc,
  likes,
  user: {
    name,
    portfolio_url: url,
    profile_image: { medium },
  },
}) => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={image} alt={desc} />
      </div>
      <article>
        <div className="text">
          <h3>{name}</h3>
          <p>{likes} likes</p>
        </div>
        <aside>
          <a href={url}>
            <img src={medium} alt={name} />
          </a>
        </aside>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 300px;
  overflow-y: hidden;
  z-index: 10;
  .img-con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:hover article {
    bottom: 0px;
  }
  article {
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.5);
    transition: 0.3s ease-out;
    h3 {
      color: var(--main);
    }
    p {
      margin-top: 5px;
      font-size: 16px;
    }
    aside {
      position: relative;
      width: 50px;
      height: 50px;
      a {
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 385px;
  }
  @media (max-width: 415px) {
    height: 300px;
  }
`;

export default SinglePhoto;
