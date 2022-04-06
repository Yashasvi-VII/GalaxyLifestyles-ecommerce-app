import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 35vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0vh;
  flex-direction: column;
`;
const Title = styled.h1`
  color: silver;
  font-size: 60px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: green;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
