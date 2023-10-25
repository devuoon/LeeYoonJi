import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

const Toptoscroll = () => {
  return (
    <TopWrap>
      <Link to="Page1" spy={true} smooth={true}>
        <AiOutlineArrowUp />
      </Link>
    </TopWrap>
  );
};

export default Toptoscroll;

const TopWrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
  border: 1px solid #fff;
  padding: 12px 15px;
  background: none;
  transition: 0.3s;
  cursor: pointer;

  svg {
    width: 1.3em;
    height: 1.3em;
  }

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;
