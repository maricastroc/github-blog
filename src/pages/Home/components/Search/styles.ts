import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchContent = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 480px) {
    gap: 1rem;
  }
`

export const SearchBar = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-subtitle']};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  width: 100%;
  font-size: 0.9rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  @media (min-width: 480px) {
    font-size: 1rem;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-subtitle']};
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-500']};
    transition: 200ms;
  }

  @media (min-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`
