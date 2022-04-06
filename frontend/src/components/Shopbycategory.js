import styled from "styled-components";
import Shopbycategoryitems from "./Shopbycategoryitem";
import { Shopbycategory } from "../Data";
const Container = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  cursor: pointer;
`;

const Shopbycategories = () => {
  return (
    <Container>
      {Shopbycategory.map((item) => (
        <Shopbycategoryitems item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Shopbycategories;
