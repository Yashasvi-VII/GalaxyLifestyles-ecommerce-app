import styled from "styled-components";
import Shopbycategoryitems2 from "./Shopbycategoryitem";
import { Shopbycategory2 } from "../Data";
const Container = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  cursor: pointer;
`;

const Shopbycategories2 = () => {
  return (
    <Container>
      {Shopbycategory2.map((item) => (
        <Shopbycategoryitems2 item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Shopbycategories2;
