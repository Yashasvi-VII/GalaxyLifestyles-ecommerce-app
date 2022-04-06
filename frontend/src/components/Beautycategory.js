import styled from "styled-components";
import { Beautycatgeory } from "../Data";

import Beautycategoryitem from "./Beautycategoryitem";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 20px;
  justify-content: space-between;
`;

const Beautycategory = () => {
  return (
    <Container>
      {Beautycatgeory.map((item) => (
        <Beautycategoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Beautycategory;
