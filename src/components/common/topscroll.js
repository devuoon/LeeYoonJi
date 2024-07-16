import React from "react";
import * as S from "../page.style";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import useScrollPosition from "../../hook/scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Toptoscroll = () => {
  const scrollPosition = useScrollPosition();

  return (
    <S.ScrollStyle>
      <TopWrap
        onClick={scrollToTop}
        className={scrollPosition < 900 ? "hidden" : "visible"}
      >
        <AiOutlineArrowUp />
      </TopWrap>
    </S.ScrollStyle>
  );
};

export default Toptoscroll;

const TopWrap = styled.div`
  position: fixed;
  bottom: 100px;
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
