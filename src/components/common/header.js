import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Wrap>
      <div className="header-in">
        <a href="/">
          <img
            src="https://i.ibb.co/FzcHWdT/Group-9.png"
            alt="Logo"
            border="0"
          />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="Page2" spy={true} smooth={true}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="Page3" spy={true} smooth={true}>
              <a>Skill</a>
            </Link>
          </li>
          <li>
            <Link to="Page4" spy={true} smooth={true}>
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link to="Page5" spy={true} smooth={true}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 80px;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 150px;
  }

  ul {
    display: flex;
  }

  li {
    padding: 0 30px;
  }

  a {
    font-size: 18px;
    font-weight: 600;
    color: #fff;

    &:hover {
      text-decoration: underline;
      color: #00c4ff;
    }
  }
`;
