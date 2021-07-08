import styled from "styled-components";
import FeaturePic from "../../images/special-pizza.jpeg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2rem;
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
