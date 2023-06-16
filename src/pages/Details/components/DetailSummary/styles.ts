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

export const DetailsSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  svg {
    margin-top: -0.1rem;
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

export const DetailsSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  font-weight: 600;
`

export const IconsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;
  }

  @media (min-width: 680px) {
    flex-direction: row;
    gap: 1.8rem;
  }
`

export const IconItem = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-span']};
  }
`
