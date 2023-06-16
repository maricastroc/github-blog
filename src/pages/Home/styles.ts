import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: clamp(15rem, 90vw, 30rem);

  @media (min-width: 680px) {
    width: 80vw;
  }

  @media (min-width: 1024px) {
    width: 54rem;
  }
`

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0;
  gap: 2rem;

  @media (min-width: 725px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`
