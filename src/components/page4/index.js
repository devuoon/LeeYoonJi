import React from "react";
import * as S from "../page.style";
import styled from "styled-components";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Page4 = () => {
  return (
    <S.PageWrap id="Page4">
      <S.Title>
        <h2>PROJECTS</h2>
      </S.Title>
      <SwiperWrap
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <ProjectSlide>
          <div>
            <img
              src="https://i.ibb.co/NsvdfQK/portfolio-main.png"
              alt="portfolio-main"
            />
            <h2>PORTFOLIO</h2>
            <p>개인프로젝트</p>
            <h3>
              JQuery + SCSS 를 이용해 만든 포트폴리오 입니다. UI/UX 와 비주얼
              부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
              반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
            </h3>
            <div className="flexwrap">
              <a>#React</a>
              <a>#반응형웹</a>
              <a>#또뭐있지</a>
            </div>
            <div className="flexwrap">
              <button className="Site">사이트 바로가기</button>
              <button className="Git">Github</button>
            </div>
          </div>
        </ProjectSlide>
        <ProjectSlide>Slide 2</ProjectSlide>
        <ProjectSlide>Slide 3</ProjectSlide>
      </SwiperWrap>
    </S.PageWrap>
  );
};

export default Page4;

const SwiperWrap = styled(Swiper)`
  max-width: 900px;
  overflow: visible;

  .swiper-pagination {
    bottom: -100px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    margin: 0 15px !important;
    background: #dcdcdc;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #dcdcdc;
    opacity: 0.6;
  }
`;

const ProjectSlide = styled(SwiperSlide)`
  div {
    max-width: 642px;
    margin: 0 auto;
  }
  img {
    width: 100%;
    display: block;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.9rem;
    font-weight: 800;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: #a4a4ff;
  }

  h3 {
    max-width: 100%;
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 300;
    word-break: keep-all;
    line-height: 1.5rem;
  }

  .flexwrap {
    display: flex;
    padding-top: 30px;

    a {
      padding: 8px 15px;
      margin-right: 16px;
      margin-bottom: 10px;
      background-color: rgba(55, 55, 67, 0.7);
      border-radius: 7px;
      white-space: nowrap;
      will-change: transform;
      transition: transform 300ms;
    }

    button.Site {
      position: relative;
      height: 38px;
      line-height: 38px;
      padding-right: 17px;
      padding-left: 36px;
      opacity: 1;
      font-size: 0.9rem;
      font-weight: 500;
      color: rgb(255, 255, 255);
      background-color: rgb(42, 42, 110);
      transition: 150ms;
      white-space: nowrap;
      border: none;
      margin-right: 15px;
    }

    button.Git {
      position: relative;
      height: 38px;
      line-height: 38px;
      padding-right: 20px;
      padding-left: 47px;
      opacity: 1;
      font-size: 0.9rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      transition: 150ms;
      white-space: nowrap;
      box-sizing: border-box;
      border: none;
    }
  }
`;
