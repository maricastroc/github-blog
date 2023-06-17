import styled from 'styled-components'

export const RepoCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  height: 21rem;
  width: clamp(10rem, 80vw, 30rem);
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  @media (min-width: 480px) {
    height: 17rem;
  }

  @media (min-width: 725px) {
    width: auto;
    height: 21rem;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    height: 17rem;
  }
`

export const RepoUrlContent = styled.div`
  a {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    text-decoration: none;
    color: ${(props) => props.theme['blue-500']};
    font-weight: 600;

    &:hover {
      opacity: 0.8;
      transition: opacity 200ms;
    }

    svg {
      font-size: 11px;
      margin-left: 0.3rem;
    }
  }
`

export const RepoIssuesContent = styled.div`
  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: ${(props) => props.theme['blue-500']};
    font-weight: 600;

    &:hover {
      opacity: 0.8;
      transition: opacity 200ms;
    }
  }

  svg {
    color: ${(props) => props.theme['blue-500']};
    font-size: 12px;
    margin-left: 0.3rem;
  }
`

export const RepoCardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const RepoFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const RepoCardHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme['base-title']};
      max-width: 100%;
      margin: 0.5rem 0 0.8rem;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h2 {
        margin: 0;
        max-width: 75%;
      }
    }
  }

  p {
    font-size: 0.85rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const RepoCardDescription = styled.div`
  position: relative;
  max-height: 6.5rem;
  overflow: hidden;

  strong {
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    line-height: 150%;
  }
`

export const LanguageContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-span']};
  }

  span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['blue-500']};

    &.typescript {
      background-color: ${(props) => props.theme['blue-typescript']};
    }

    &.javascript {
      background-color: ${(props) => props.theme['pink-javascript']};
    }

    &.html {
      background-color: ${(props) => props.theme['green-html']};
    }

    &.css {
      background-color: ${(props) => props.theme['orange-css']};
    }
  }
`
