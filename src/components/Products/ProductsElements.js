import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 5px 5px #fdc500;
  border-radius: 10px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 2rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: 2px solid #e9ba23;
  background: #e31837;
  color: #fff;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e9ba23;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    color: #000;
  }
`;
