import styled from "styled-components";
import { categories2 } from "../Data";

import CategoryItem from "./Categoriesitems2";

const Container = styled.div`
  display: flex;
  position: realtive;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories2.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
