import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(15rem, 90vw, 30rem);
  margin: 0 auto;

  @media (min-width: 680px) {
    width: 80vw;
  }

  @media (min-width: 1024px) {
    width: 54rem;
  }
`

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  width: 100%;
  color: ${(props) => props.theme['base-text']};

  h2 {
    opacity: 0.9;
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-500']};
    font-weight: 600;
  }

  h3 {
    opacity: 0.9;
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-500']};
    font-weight: 400;
  }

  p {
    line-height: 160%;
  }

  a {
    opacity: 0.8;
    color: ${(props) => props.theme['blue-500']};
    border-bottom: 1px solid ${(props) => props.theme['blue-500']};
  }

  li {
    margin-left: 1rem;
    line-height: 150%;
  }

  li + li {
    margin-top: 1rem;
  }

  img {
    max-width: clamp(16rem, 80vw, 40rem);
    height: auto;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 2rem;

    img {
      max-width: 100%;
    }
  }
`
