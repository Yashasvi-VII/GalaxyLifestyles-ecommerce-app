import styled from "styled-components";
import { Beautycatgeory2 } from "../Data";
import "./Beautycategory2.css";
import Beautycategoryitem from "./Beautycategoryitem";

const Container = styled.div`
  display: flex;

  position: relative;
  padding: 20px;
`;

const Beautycategory2 = () => {
  return (
    <Container>
      {Beautycatgeory2.map((item) => (
        <Beautycategoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Beautycategory2;
