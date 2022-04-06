import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 0px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <div className="contain">
        <Link to={`/products/${item.categ}`}>
          <Image src={item.img} />
          <Info>
            <Title className="Title">{item.title}</Title>
          </Info>
        </Link>
      </div>
    </Container>
  );
};

export default CategoryItem;
