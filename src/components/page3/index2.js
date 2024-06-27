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
            <S.Title2>#FRONT</S.Title2>
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
                  score={70}
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
                  score={70}
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
                  score={60}
                />
                <p>
                  Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할
                  수 있습니다.
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
                  progressColor={"green"}
                  darkTheme
                  score={50}
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
                  score={50}
                />
                <p>
                  Type-Safe한 코드 작성으로 인한 버그가 적은 코드를 작성할 수
                  있습니다.
                </p>
              </div>
            </S.FlexWrap>
            <S.FlexWrap>
                  <img
                      src="https://i.ibb.co/Dp19bqX/tailwind.png"
                      alt="Tailwind"
                      border="0"
                  />
                  <div className="flex">
                      <ProgressBar
                          className="space"
                          label={"Tailwind"}
                          progressColor={"blue"}
                          darkTheme
                          score={55}
                      />
                      <p>
                          테일윈드를 활용해 빠르고 효율적으로 반응형 웹사이트를 스타일링할 수 있습니다.
                      </p>
                  </div>
              </S.FlexWrap>
          </S.ToolBox>

            <S.ToolBox
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
            >
                <S.Title2>#BACK/Data/DevOps</S.Title2>
                <S.FlexWrap>
                    <img
                        src="https://i.ibb.co/9g5Qfzf/java.png"
                        alt="Java"
                        border="0"
                    />
                    <div className="flex">
                        <ProgressBar
                            className="space"
                            label={"Java"}
                            progressColor={"red"}
                            darkTheme
                            score={40}
                        />
                        <p>
                            객체지향 프로그래밍과 다양한 디자인 패턴을 적용한 애플리케이션을 개발할 수 있습니다.
                        </p>
                    </div>
                </S.FlexWrap>
                <S.FlexWrap>
                    <img
                        src="https://i.ibb.co/r2zRzxD/spring.png"
                        alt="Spring"
                        border="0"
                    />
                    <div className="flex">
                        <ProgressBar
                            className="space"
                            label={"Spring"}
                            progressColor={"blue"}
                            darkTheme
                            score={45}
                        />
                        <p>
                            대규모 웹 애플리케이션을 개발하고, 의존성 주입 및 관점 지향 프로그래밍을 적용할 수 있습니다.
                        </p>
                    </div>
                </S.FlexWrap>
                <S.FlexWrap>
                    <img
                        src="https://i.ibb.co/WpV5JMt/mybatis.png"
                        alt="MyBatis"
                        border="0"
                    />
                    <div className="flex">
                        <ProgressBar
                            className="space"
                            label={"MyBatis"}
                            progressColor={"red"}
                            darkTheme
                            score={40}
                        />
                        <p>
                            복잡한 SQL 쿼리를 매핑하고, 효율적으로 데이터베이스와 상호작용할 수 있습니다.
                        </p>
                    </div>
                </S.FlexWrap>
                <S.FlexWrap>
                    <img
                        src="https://i.ibb.co/fSCgRdX/oracle.png"
                        alt="Oracle"
                        border="0"
                    />
                    <div className="flex">
                        <ProgressBar
                            className="space"
                            label={"Oracle"}
                            progressColor={"green"}
                            darkTheme
                            score={45}
                        />
                        <p>
                            DBMS를 사용해 데이터베이스 설계, PL/SQL 프로그래밍, 쿼리 최적화를 수행할 수 있습니다.
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
                            progressColor={"purple"}
                            darkTheme
                            score={60}
                        />
                        <p>
                            Git을 사용해 버전 관리, 브랜치 전략, 협업 워크플로우를 효율적으로 관리할 수 있습니다.
                        </p>
                    </div>
                </S.FlexWrap>
                <S.FlexWrap>
                    <img
                        src="https://i.ibb.co/5nKJTfY/Docker.png"
                        alt="Docker"
                        border="0"
                    />
                    <div className="flex">
                        <ProgressBar
                            className="space"
                            label={"Docker"}
                            progressColor={"blue"}
                            darkTheme
                            score={40}
                        />
                        <p>
                            Docker를 이용해 컨테이너화된 애플리케이션을 작성하고, 배포 및 관리를 자동화할 수 있습니다.
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
