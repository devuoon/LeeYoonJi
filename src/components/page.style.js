import styled from "styled-components";

export const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
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
