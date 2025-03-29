import Form from "./components/layout/Form";
import styled from "styled-components";

const Container = styled.div`
  padding: 18px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

function App() {
  return (
    <Container>
      <InnerWrapper>
        <Form />
      </InnerWrapper>
    </Container>
  );
}

export default App;
