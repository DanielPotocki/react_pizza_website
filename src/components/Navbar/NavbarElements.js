import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    position: absolute;
    top: 20px;
    left: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
  }

  @media screen and (max-width: 315px) {
    top: 30px;
    font-size: 12px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
