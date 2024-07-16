import React, { useEffect } from "react";
import * as S from "../page.style";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard, EffectFade } from "swiper/modules";

const Page4 = () => {
  useEffect(() => {
    AOS.init();
  }, []); // [] 추가: useEffect가 한 번만 실행되도록 설정

  return (
      <S.Page4>
        <S.PageWrap id="Page4">
          <S.Title>
            <h2 data-aos="fade-up" data-aos-duration="1000">
              PROJECTS
            </h2>
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
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
          >
            <SwiperSlide className="projectslide">
              <div>
                <img
                    src="https://i.ibb.co/55yMwmk/portfolio2.png"
                    alt="portfolio-main"
                />
                <h2>LEE YOONJI PORTFOLIO</h2>
                <p className="subinfo">개인프로젝트</p>
                <h3>
                  React를 이용해 만든 개인 포트폴리오 입니다. UI/UX 와 비주얼
                  부분을 포트폴리오를 보는 입장을 생각하며 신경써서 진행했습니다.
                  반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
                </h3>
                <S.FlexWrap2>
                  <p>#React</p>
                  <p>#반응형웹</p>
                </S.FlexWrap2>
                <S.FlexWrap2>
                  <a
                      href="https://lee-yoon-ji.vercel.app/"
                      className="Site"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    사이트 바로가기
                  </a>
                  <a
                      href="https://github.com/devuoon/LeeYoonJi"
                      className="Git"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                    Github
                  </a>
                </S.FlexWrap2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projectslide">
              <div>
                <img
                    src="https://i.ibb.co/X7QQRZj/10.png"
                    alt="challeniz-main"
                    target="_blank"
                />
                <h2>챌리니즈(Challeniz)</h2>
                <p className="subinfo">팀프로젝트</p>
                <h3>
                  Typescript를 이용해 만든 팀 프로젝트입니다. 함께 도전하여
                  성공률을 높이고 동기부여를 만들고자 기획한 '챌린지 서비스'
                  입니다. 반응형웹으로 만들어져 모든 환경에서 사용가능합니다.
                </h3>
                <S.FlexWrap2>
                  <p>#React</p>
                  <p>#TypeScript</p>
                  <p>#반응형웹</p>
                </S.FlexWrap2>
                <S.FlexWrap2>
                  <a
                      href="http://challeniz.mooo.com/"
                      className="Site"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    사이트 바로가기
                  </a>
                  <a
                      href="https://github.com/devuoon/challeniz"
                      className="Git"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                    Github
                  </a>
                </S.FlexWrap2>
              </div>
            </SwiperSlide>
          </Swiper>
        </S.PageWrap>
      </S.Page4>
  );
};

export default Page4;