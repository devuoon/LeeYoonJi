import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <ul>
        <li>
          <a href="https://github.com/devuoon">
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a href="https://yoon-dev.tistory.com/">
            <SiTistory />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/%EC%9C%A5%EC%9D%B4-undefined-07333328b/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Copyright ⓒ 2023. LeeYoonji All rights reserved</p>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 30px 0 60px;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      width: 40px;
      height: 43px;
      position: relative;
      margin: 0 20px;
      a {
        &::after {
          display: none;
          position: absolute;
          top: -16px;
          left: 0%;
          width: 100%;
          border-radius: 5px;
          color: #fff;
          transition: 0.2s;
          font-size: 11px;
        }

        &:hover::after {
          display: block;
        }
        &:hover {
          svg {
            width: 2.5em;
            height: 2.5em;
            transition: 0.3s;
          }
        }
      }

      svg {
        color: #fff;
        width: 2em;
        height: 2em;
      }
    }

    li:nth-child(1) {
      a {
        &::after {
          content: "Github";
        }
      }
    }

    li:nth-child(2) {
      a {
        &::after {
          content: "Blog";
        }
      }
      svg {
        width: 1.8em;
        height: 1.8em;
      }
    }

    li:nth-child(3) {
      a {
        &::after {
          content: "LinkedIn";
        }
      }
      svg {
        width: 1.8em;
        height: 1.8em;
      }
    }
  }

  p {
    padding-top: 30px;
    color: rgba(255, 255, 255, 0.3);
  }
`;
