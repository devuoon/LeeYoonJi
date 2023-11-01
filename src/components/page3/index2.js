import React, { useEffect } from "react";
import * as S from "../page.style";
import { ProgressBar } from "react-progressbar-fancy";
import AOS from "aos";
import "aos/dist/aos.css";

const Page3 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <S.Page3>
      <S.PageWrap id="Page3">
        <S.Title>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            TECH STACK
          </h2>
        </S.Title>
        <S.ToolWrap>
          <S.ToolBox
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <S.Title2>#FRONT-END</S.Title2>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/pv7gztf/HTML5.png"
                alt="html5"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"HTML5"}
                  progressColor={"red"}
                  darkTheme
                  score={80}
                />
                <p>
                  HTML 시멘틱 태그를 이해하고 웹접근성, 표준성을 준수하여 마크업
                  할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/pX9t0J8/css3.png"
                alt="css3"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"CSS3"}
                  progressColor={"blue"}
                  darkTheme
                  score={80}
                />
                <p>
                  크로스 브라우징, 반응형 웹을 위한 적절한 스타일링 방법을
                  적용할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/PWvLLWj/js.png"
                alt="javascript"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"JavaScript"}
                  progressColor={"red"}
                  darkTheme
                  score={65}
                />
                <p>
                  Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할
                  수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/KXyYC20/jquery.png"
                alt="jquery"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Jquery"}
                  progressColor={"green"}
                  darkTheme
                  score={60}
                />
                <p>
                  실무에서 활용해본 경험이 있으며 효율적인 DOM조작법을 알고
                  있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/3skQK6c/reactjs.png"
                alt="React"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"React"}
                  progressColor={"blue"}
                  darkTheme
                  score={70}
                />
                <p>
                  다양한 라이브러리를 활용해 React를 활용한 프로젝트를 진행한
                  경험이 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/8m82dz6/typescript-original-logo-icon-146317.png"
                alt="TypeSciprt"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"TypeScript"}
                  progressColor={"purple"}
                  darkTheme
                  score={60}
                />
                <p>
                  Type-Safe한 코드 작성으로 인한 버그가 적은 코드를 작성할 수
                  있습니다.
                </p>
              </div>
            </S.FlexWrap>
          </S.ToolBox>
          <S.ToolBox
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <S.Title2>#Using Tool</S.Title2>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/pwHZvr7/vscode.png"
                alt="Vs code"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Visual Studio Code"}
                  progressColor={"red"}
                  darkTheme
                  score={80}
                />
                <p>
                  주로 사용하는 코딩툴이며, 코딩에 편리한 확장프로그램들을
                  설치해 사용하고 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/X20W2n0/git.png"
                alt="Git"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Git"}
                  progressColor={"blue"}
                  darkTheme
                  score={75}
                />
                <p>
                  commit, push, pull, clone 등 git 명령어를 사용하여
                  레파지토리에 접근할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/yfVvNr9/postman.png"
                alt="Postman"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Postman"}
                  progressColor={"red"}
                  darkTheme
                  score={55}
                />
                <p>
                  Postman을 이용해 서버에 GET, POST 요청을 해서 서버 디버깅을 할
                  수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/4Kxm0rV/photoshop.png"
                alt="Photoshop"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Photoshop"}
                  progressColor={"green"}
                  darkTheme
                  score={80}
                />
                <p>
                  마스크효과, 레이어 활용 등을 이용해 다양한 그래픽 요소를
                  제작할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/WFhWH40/illustrator.png"
                alt="illustrator"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Illustrator"}
                  progressColor={"blue"}
                  darkTheme
                  score={80}
                />
                <p>
                  펜툴 활용과 기타도구들을 이용해서 벡터 형식의 디자인 요소를
                  제작할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
              <img
                src="https://i.ibb.co/txRHjf7/figma.png"
                alt="Figma"
                border="0"
              />
              <div className="flex">
                <ProgressBar
                  className="space"
                  label={"Figma"}
                  progressColor={"purple"}
                  darkTheme
                  score={65}
                />
                <p>
                  데스크톱, 모바일 UI/UX 시안을 작업 할 수 있으며, 디버깅을 잘
                  활용할 수 있습니다.
                </p>
              </div>
            </S.FlexWrap>
          </S.ToolBox>
        </S.ToolWrap>
      </S.PageWrap>
    </S.Page3>
  );
};

export default Page3;
