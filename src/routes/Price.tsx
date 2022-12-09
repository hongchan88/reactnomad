import styled from 'styled-components';

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function Price(props: any) {
  return (
    <Container>
      <PriceWrapper>
        <p>Price</p>
        <h1>{props?.price}</h1>
      </PriceWrapper>
      <PriceWrapper>
        <p>All Time High</p>
        <h1>{props?.ath}</h1>
      </PriceWrapper>
    </Container>
  );
}

export default Price;
