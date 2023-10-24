import React from "react";
import * as S from "../page.style";

const Page2 = () => {
  return (
    <S.BackWrap>
      <S.ImgWrap></S.ImgWrap>
      <S.TextWrap>
        <h3>
          <span>
            안녕하세요.
            <br />
            프론트엔드 개발자를 꿈꾸는 이윤지입니다.
          </span>
          <br />
          소개말소개말소개말소개말소개말소개말소개말소개말
          <br />
          소개말소개말소개말소개말소개말소개말소개말소개말
          <br />
        </h3>
        <h2>EDUCATION</h2>
        <div className="flex-wrap">
          <h4>경상대학교</h4>
          <p>
            의류학과 <br />
            2016.03 ~ 2020.02 졸업
          </p>
        </div>
        <div className="flex-wrap">
          <h4>나래디자인학원</h4>
          <p>
            UI/UX 웹퍼블리셔 과정 <br />
            2020.03 ~ 2020.07 수료
          </p>
        </div>
        <div className="flex-wrap">
          <h4>엘리스 코딩</h4>
          <p>
            SW 엔지니어 트랙 5기 <br />
            2023.04 ~ 2023.08 수료
          </p>
        </div>
        <h2>CAREER</h2>
        <div className="flex-wrap">
          <h4>디자인더블유</h4>
          <p>
            웹퍼블리셔 / 사원 <br />
            2021.01 ~ 2023.04 재직
          </p>
        </div>
      </S.TextWrap>
    </S.BackWrap>
  );
};

export default Page2;
