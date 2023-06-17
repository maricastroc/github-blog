import styled from 'styled-components'

export const DetailsSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 12px;
  margin-top: -5.5rem;
  margin-bottom: 1rem;
`

export const DetailsSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailsSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.9rem;

  a {
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  svg {
    margin-top: -0.1rem;
  }

  @media (min-width: 680px) {
    margin-bottom: 1.25rem;
  }
`

export const ReturnContent = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 600;
`

export const UrlContent = styled.div`
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }
`

export const IconsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;
    width: 1rem;
  }

  @media (min-width: 680px) {
    margin-top: 1.5rem;
    flex-direction: row;
    gap: 1.8rem;

    svg {
      width: auto;
    }
  }
`

export const IconItem = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-span']};
  }

  a {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-span']};
    border-bottom: solid 1px transparent;

    &.disabled {
      cursor: not-allowed;

      &:hover {
        border-bottom: solid 1px transparent;
      }
    }

    &:hover {
      border-bottom: solid 1px ${(props) => props.theme['base-span']};
    }
  }

  @media (min-width: 680px) {
    p,
    a {
      font-size: 1rem;
    }
  }
`
export const LanguagesContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const BarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
  max-width: 20rem;
`

export const BarBackground = styled.div`
  position: relative;
  display: flex;
  height: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-profile']};
  width: 100%;
`

export const BarFill = styled.span<{ width: number }>`
  height: 10px;
  width: ${(props) => (props.width / 100) * 20}rem;
  border: 1px;

  &.html {
    background-color: ${(props) => props.theme['base-html']};
  }

  &.typescript {
    background-color: ${(props) => props.theme['base-typescript']};
  }

  &.css,
  &.scss {
    background-color: ${(props) => props.theme['base-css']};
  }

  &.javascript {
    background-color: ${(props) => props.theme['base-javascript']};
  }
`
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  @media (min-width: 680px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-span']};

  strong {
    font-size: 0.8rem;

    span {
      font-size: 0.8rem;
    }
  }

  span {
    margin-right: 0.3rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;

    &.html {
      background-color: ${(props) => props.theme['base-html']};
    }

    &.typescript {
      background-color: ${(props) => props.theme['base-typescript']};
    }

    &.css,
    &.scss {
      background-color: ${(props) => props.theme['base-css']};
    }

    &.javascript {
      background-color: ${(props) => props.theme['base-javascript']};
    }
  }

  @media (min-width: 680px) {
    strong {
      font-size: 0.9rem;

      span {
        font-size: 0.9rem;
      }
    }
  }
`
