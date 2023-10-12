import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0 80px;
  align-items: center;
  box-sizing: border-box;

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
    }
  }
`;

const Header = () => {
  return (
    <Wrap>
      <div className="header-in">
        <a href="/">Logo</a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skill</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </Wrap>
  );
};

export default Header;
