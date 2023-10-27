import React from "react";
import * as S from "../page.style";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard, EffectFade } from "swiper/modules";

const Page4 = () => {
  return (
    <S.Page4>
      <S.PageWrap id="Page4">
        <S.Title>
          <h2>PROJECTS</h2>
        </S.Title>
        <Swiper
          spaceBetween={80}
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Keyboard, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide className="projectslide">
            <div>
              <img
                src="https://i.ibb.co/55yMwmk/portfolio2.png"
                alt="portfolio-main"
              />
              <h2>LEE YOONJI PORTFOLIO</h2>
              <p>개인프로젝트</p>
              <h3>
                JQuery + SCSS 를 이용해 만든 포트폴리오 입니다. UI/UX 와 비주얼
                부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
                반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
              </h3>
              <S.FlexWrap2>
                <a>#React</a>
                <a>#반응형웹</a>
              </S.FlexWrap2>
              <S.FlexWrap2>
                <button className="Site">
                  <FiExternalLink />
                  사이트 바로가기
                </button>
                <button className="Git">
                  <AiFillGithub />
                  Github
                </button>
              </S.FlexWrap2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projectslide">
            <div>
              <img
                src="https://i.ibb.co/NsvdfQK/portfolio-main.png"
                alt="portfolio-main"
              />
              <h2>챌리니즈(Challeniz)</h2>
              <p>팀프로젝트</p>
              <h3>
                JQuery + SCSS 를 이용해 만든 포트폴리오 입니다. UI/UX 와 비주얼
                부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
                반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
              </h3>
              <S.FlexWrap2>
                <a>#React</a>
                <a>#TypeScript</a>
                <a>#반응형웹</a>
              </S.FlexWrap2>
              <S.FlexWrap2>
                <button className="Site">
                  <FiExternalLink />
                  사이트 바로가기
                </button>
                <button className="Git">
                  <AiFillGithub />
                  Github
                </button>
              </S.FlexWrap2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projectslide">
            <div>
              <img
                src="https://i.ibb.co/NsvdfQK/portfolio-main.png"
                alt="portfolio-main"
              />
              <h2>성원토월그랜드타운</h2>
              <p>실무작업물</p>
              <h3>
                JQuery + SCSS 를 이용해 만든 포트폴리오 입니다. UI/UX 와 비주얼
                부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
                반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
              </h3>
              <S.FlexWrap2>
                <a>#웹퍼블리싱</a>
                <a>#그누보드</a>
                <a>#반응형웹</a>
              </S.FlexWrap2>
              <S.FlexWrap2>
                <button className="Site">사이트 바로가기</button>
              </S.FlexWrap2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projectslide">
            <div>
              <img
                src="https://i.ibb.co/NsvdfQK/portfolio-main.png"
                alt="portfolio-main"
              />
              <h2>대장경식품</h2>
              <p>실무작업물</p>
              <h3>
                JQuery + SCSS 를 이용해 만든 포트폴리오 입니다. UI/UX 와 비주얼
                부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
                반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
              </h3>
              <S.FlexWrap2>
                <a>#웹퍼블리싱</a>
                <a>#그누보드</a>
                <a>#반응형웹</a>
              </S.FlexWrap2>
              <S.FlexWrap2>
                <button className="Site">사이트 바로가기</button>
              </S.FlexWrap2>
            </div>
          </SwiperSlide>
        </Swiper>
      </S.PageWrap>
    </S.Page4>
  );
};

export default Page4;
