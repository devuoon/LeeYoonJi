import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
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
`;

// PAGE 1
export const Page1 = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

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
  padding: 160px 0;
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  width: 400px;
  height: 500px;
  background-color: #ddd;
  margin-right: 130px;
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
    border-top: 1px solid #fff;
    padding-top: 30px;
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 30px;
  }

  .flex-wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;

    h4 {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

// PAGE3

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
  }
`;

export const Title2 = styled.h3`
  display: inline-block;
  font-size: 17px;
  color: #fff;
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

  .apexcharts-text {
    fill: #fff;
  }
`;

// page5

export const FormWrap = styled.div`
  max-width: 500px;
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
