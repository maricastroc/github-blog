import styled from 'styled-components'

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  margin: -5.5rem auto 0;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 12px;
`

export const ReturnContent = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 600;

  &:focus {
    box-shadow: none;
  }

  a {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  a,
  p {
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;

    &:focus {
      box-shadow: none;
    }
  }

  svg {
    color: ${(props) => props.theme['blue-500']};
    margin-top: -0.1rem;
  }
`

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 680px) {
    flex-direction: row;
  }
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  margin-bottom: 2.5rem;

  @media (min-width: 680px) {
    margin-bottom: 0;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  gap: 1rem;
  width: 100%;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme['blue-500']};
    font-weight: 600;

    &:hover {
      opacity: 0.8;
      transition: opacity 200ms;
    }

    svg {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-left: 0.3rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`

export const Description = styled.p`
  display: flex;
  line-height: 150%;
`

export const IconsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;
    width: 1.5rem;
  }

  @media (min-width: 1024px) {
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
    color: ${(props) => props.theme['base-span']};
  }
`
