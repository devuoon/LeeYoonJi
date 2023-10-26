import React from "react";
import * as S from "../page.style";
import { ProgressBar } from "react-progressbar-fancy";

const Page3 = () => {
  return (
    <S.Page3>
      <S.PageWrap id="Page3">
        <S.Title>
          <h2>TECH STACK</h2>
          <p>아이콘에 마우스를 올리면 자세한 설명을 볼 수 있습니다.</p>
        </S.Title>
        <S.Title2>#FRONT-END</S.Title2>
        <div>
          <ProgressBar
            className="space"
            label={"HTML5"}
            progressColor={"red"}
            darkTheme
            score={25}
          />
          <p>
            HTML 시멘틱 태그를 이해하고 웹접근성에 맞게 마크업 할 수 있습니다.
          </p>
        </div>
      </S.PageWrap>
    </S.Page3>
  );
};

export default Page3;
