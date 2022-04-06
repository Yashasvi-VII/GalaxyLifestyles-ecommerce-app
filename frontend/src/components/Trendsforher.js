import styled from "styled-components";
import { trendsforher } from "../Data";

import Trendsforheritems from "./Trendsforheritems";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 20px;
  justify-content: space-between;
`;

const Trendsforher = () => {
  return (
    <Container>
      {trendsforher.map((item) => (
        <Trendsforheritems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Trendsforher;
