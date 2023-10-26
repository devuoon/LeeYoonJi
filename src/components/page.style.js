import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ScrollStyle = styled.div`
  .visible {
    opacity: 1;
  }

  .hidden {
    opacity: 0;
  }

  .visible_7 {
    opacity: 1;
    transition: 0.7s;
  }

  .hidden_7 {
    opacity: 0;
    transition: 0.7s;
  }

  .Back_white {
    background-color: #fff;
  }

  .Back_black {
    background-color: #000;
  }
`;

// PAGE 1
export const Page1 = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: linear-gradient(
    -45deg,
    #000000,
    rgb(61, 22, 41),
    rgb(36, 20, 63),
    #68648b
  );
  background-size: 400% 400%;
  animation: gradient 14s ease-in-out infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  div.text {
    font-weight: 400;
    font-size: 80px;
    color: #fafafa;
    margin: auto;
  }

  .dud {
    color: #757575;
  }
`;

export const ScrollWrap = styled.div`
  a {
    position: absolute;
    bottom: 30px;
    padding-top: 60px;
    left: 50%;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
  }
  a span {
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 1px solid #969696;
    border-radius: 50px;
    box-sizing: border-box;
  }
  a span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: "";
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

// PAGE 2

export const BackWrap = styled.div`
  margin: 0 auto;
  padding: 60px 0px 160px;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  align-content: center;
  flex-wrap: wrap;

  h1 {
    position: absolute;
    top: 180px;
    left: 100px;
    font-size: 120px;
    font-weight: 900;
    z-index: -1;
    -webkit-text-stroke: 1.6px;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.4);
    -webkit-text-fill-color: transparent;
  }
`;

export const ImgWrap = styled.div`
  width: 400px;
  height: 500px;
  margin-right: 130px;
  background: url("https://i.ibb.co/8dbCvhf/aboutme2.jpg") no-repeat
    center/cover;
  border-radius: 10px;
`;

export const TextWrap = styled.div`
  color: #fff;

  h3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    padding-bottom: 30px;

    span {
      font-weight: 600;
    }
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 30px;
  }

  .flex-wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    align-items: center;

    &.last {
      padding-bottom: 0px;
    }

    h4 {
      font-size: 17px;
      font-weight: 600;
    }

    p {
      font-size: 15px;
      line-height: 18px;
      font-weight: 300;
    }
  }
`;

export const Edubox = styled.div`
  padding: 30px 0;
  border-top: 1px solid #fff;
`;

// PAGE3

export const Page3 = styled.div`
  height: 100vh;
  background-size: 30px 30px;
  background-image: repeating-radial-gradient(
    rgba(255, 255, 255, 0.2) 0px,
    black 2px,
    black 48px
  );
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 5px;
  }

  p {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const Title2 = styled.h3`
  display: inline-block;
  font-size: 17px;
  padding: 7px 16px;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const ChartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  image {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(10px);
  }

  .apexcharts-datalabel-label {
    fill: #339af0 !important;
  }

  .apexcharts-datalabel-value {
    fill: #fff;
  }

  .apexcharts-track {
    stroke: rgba(242, 242, 242, 0.2);
  }

  .apexcharts-radialbar-hollow {
  }
`;

// Page 4
export const Page4 = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;

// page5
export const Page5 = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;

export const FormWrap = styled.div`
  min-width: 500px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 40px;

    label {
      font-size: 20px;
      font-weight: 300;
      padding-bottom: 4px;
    }

    input {
      padding: 10px 15px;
      border-radius: 5px;
      border: none;
      font-size: 15px;
      margin-bottom: 20px;
    }

    input:focus {
      outline: none;
    }

    textarea {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      padding: 10px 15px;
      border-radius: 5px;
      border: none;
      font-size: 15px;
      margin-bottom: 20px;
      resize: none;
    }

    textarea:focus {
      outline: none;
    }

    input[type="submit"] {
      cursor: pointer;
      background: none;
      border: 1px solid #fff;
      color: #fff;
      padding: 14px;
      margin-bottom: 0;
    }
    input[type="submit"]:hover {
      background: #fff;
      color: #000;
    }
  }
`;
