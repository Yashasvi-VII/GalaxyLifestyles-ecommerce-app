import styled from "styled-components";
import { toppicks } from "../Data";
import Toppicksitems from "./Toppicksitems";
const Container = styled.div`
  display: flex;
  position: relative;
`;

const Toppicks = () => {
  return (
    <Container>
      {toppicks.map((item) => (
        <Toppicksitems item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Toppicks;
