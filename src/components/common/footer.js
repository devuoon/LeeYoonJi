import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <a href="https://github.com/devuoon" target="_blank">
        <FaGithubSquare />
        <span>Github</span>
      </a>
      <a href="https://yoon-dev.tistory.com/" target="_blank">
        <SiTistory />
        <span>Blog</span>
      </a>
      <a
        href="https://www.linkedin.com/in/%EC%9C%A5%EC%9D%B4-undefined-07333328b/"
        target="_blank"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>
      <p>Copyright ⓒ 2023. LeeYoonji All rights reserved</p>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-top: 1px solid #fff;
  padding: 40px 0 60px;
  text-align: center;

  a {
    color: #fff;
    text-align: center;
    text-decoration: none;
    position: relative;
    width: 40px;
    height: 28px;
    padding-top: 12px;
    margin: 0 20px;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-font-smoothing: antialiased;

    &:hover {
      span {
        bottom: 50px;
        visibility: visible;
        opacity: 1;
      }
    }
    svg {
      width: 2em;
      height: 2em;
    }

    span {
      color: #666;
      position: absolute;
      font-family: sans-serif;
      bottom: 0;
      left: -25px;
      right: -25px;
      padding: 5px 7px;
      z-index: -1;
      font-size: 14px;
      border-radius: 2px;
      background: #fff;
      visibility: hidden;
      opacity: 0;
      -o-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -moz-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &:before {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #fff;
        position: absolute;
        bottom: -5px;
        left: 40px;
      }
    }
  }
  p {
    padding-top: 30px;
    font-size: 14px;
    color: #969696;
  }
`;
