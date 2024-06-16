import React, { useEffect } from "react";
import * as S from "../page.style";
import AOS from "aos";
import "aos/dist/aos.css";

const Page2 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <S.ScrollStyle>
      <S.BackWrap id="Page2" className="About">
        <h1 data-aos="fade-up" data-aos-duration="700">
          About me
        </h1>
        <S.ImgWrap
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        ></S.ImgWrap>
        <S.TextWrap
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3>
            <span>안녕하세요. 개발자 이윤지 입니다.</span>
            <br />
            저는 새로운 것에 대한 호기심과 도전의식으로 더 성장하고자 하는
            <br />
            열망이 있습니다. 어떻게든 해내겠다는 의지와 쉽게 포기하지 않는
            끈기로
            <br />
            계속해서 발전하는 개발자가 되고 싶습니다.
            <br />
          </h3>
          <S.Edubox>
            <h2>📚 EDUCATION</h2>
            <div className="flex-wrap">
              <h4>경상대학교</h4>
              <p>
                의류학과<br />
                2016.03.02 ~ 2020.02.21 (졸업)
              </p>
            </div>
            <div className="flex-wrap">
              <h4>엘리스 코딩</h4>
              <p>
                SW 엔지니어 트랙 5기<br/>
                2023.05.15 ~ 2023.09.01 (수료)
              </p>
            </div>
            <div className="flex-wrap last">
              <h4>국립부경대학교</h4>
              <p>
                빅데이터를 활용한 자바 개발자 <br />
                2024.01.29 ~ 2024.07.25 (수료)
              </p>
            </div>
          </S.Edubox>
          <S.Edubox>
            <h2>💻 CAREER</h2>
            <div className="flex-wrap">
              <h4>디자인더블유</h4>
              <p>
                웹퍼블리싱 및 프론트엔드 개발<br />
                2021.01.17 ~ 2023.04.28
              </p>
            </div>
          </S.Edubox>
        </S.TextWrap>
      </S.BackWrap>
    </S.ScrollStyle>
  );
};

export default Page2;
