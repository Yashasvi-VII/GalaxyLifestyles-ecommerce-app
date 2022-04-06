import styled from "styled-components";
import { trendsforhim } from "../Data";

import Trendsforhimitems from "./Trendsforhimitems";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 20px;
  justify-content: space-between;
`;

const Trendsforhim = () => {
  return (
    <Container>
      {trendsforhim.map((item) => (
        <Trendsforhimitems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Trendsforhim;
