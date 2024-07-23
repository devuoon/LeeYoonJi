import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";  // Slider import 추가
import "slick-carousel/slick/slick.css";
import "../../index.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../page.style";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <FaChevronRight style={{ color: "white", fontSize: "40px" }} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <FaChevronLeft style={{ color: "white", fontSize: "40px" }} />
        </div>
    );
}

const Page4 = () => {
    useEffect(() => {
        AOS.init();
    }, []); // [] 추가: useEffect가 한 번만 실행되도록 설정

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    return (
        <S.Page4>
            <S.PageWrap id="Page4">
                <S.Title>
                    <h2 data-aos="fade-up" data-aos-duration="1000">
                        PROJECTS
                    </h2>
                </S.Title>
                <Slider {...settings}>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/CV4pDJ7/mtis.png"
                            alt="mozip-main"
                        />
                        <h2>MTIS(해양교통안전정보시스템)</h2>
                        <p className="subinfo">실무작업물</p>
                        <h3>
                            (2022.07 ~ 2022.12)
                            kendoUI를 사용해 GIS 기반 웹 퍼블리싱을 진행했습니다.
                            주로 실시간 해양교통정보, 해양사고분석 파트를 담당했습니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#HTML</p>
                            <p>#CSS</p>
                            <p>#JavaScript</p>
                            <p>#Jquery</p>
                            <p>#KendoUI</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="https://mtis.komsa.or.kr/traffic/liveSea"
                                className="Site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/tp9NPQn/user-Manage.png"
                            alt="userManage"
                        />
                        <h2>유저 관리 시스템</h2>
                        <p className="subinfo">개인프로젝트</p>
                        <h3>
                            RESTful API를 활용한 간단한 유저 관리 시스템을 구현했습니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#javascript</p>
                            <p>#nodejs</p>
                            <p>#Express</p>
                            <p>#RESTful API</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="https://github.com/devuoon/userManage"
                                className="Git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                                Github
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/xLV9Lw0/mozip.png"
                            alt="mozip-main"
                        />
                        <h2>모집(mo.zip)</h2>
                        <p className="subinfo">팀프로젝트</p>
                        <h3>
                            Spring을 이용해 만든 팀 프로젝트 입니다. IT 및 디자인 프로젝트를
                            함께하면서 효율적인 팀워크를 구현하고 관련 구인구직 기능을 제공하는
                            플랫폼 입니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#Spring</p>
                            <p>#Javascript</p>
                            <p>#Oracle</p>
                            <p>#MyBatis</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="http://52.78.114.31:8082/"
                                className="Site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                            <a
                                href="https://github.com/PKNU-JavaStudy/mozip_backend"
                                className="Git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                                Github
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
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
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                            <a
                                href="https://github.com/devuoon/LeeYoonJi"
                                className="Git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                                Github
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
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
                            {/*<a*/}
                            {/*    href="http://challeniz.mooo.com/"*/}
                            {/*    className="Site"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*>*/}
                            {/*    <FiExternalLink/>*/}
                            {/*    사이트 바로가기*/}
                            {/*</a>*/}
                            <a
                                href="https://github.com/devuoon/challeniz"
                                className="Git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                                Github
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/SXqNtrW/tims.png"
                            alt="mozip-main"
                        />
                        <h2>TIMS(택시운행정보관리시스템)</h2>
                        <p className="subinfo">실무작업물</p>
                        <h3>
                            HTML, CSS, JavaScript를 활용해 웹퍼블리싱을 담당했습니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#HTML</p>
                            <p>#CSS</p>
                            <p>#JavaScript</p>
                            <p>#Jquery</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="https://tims.kotsa.or.kr/pts/index.do"
                                className="Site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/2k3k0fJ/image.png"
                            alt="sungwon-main"
                        />
                        <h2>성원토월그랜드타운</h2>
                        <p className="subinfo">실무작업물</p>
                        <h3>
                            실제 서비스 되고 있는 주택조합 사이트 입니다. 전체 퍼블리싱과
                            반응형작업, 유지보수를 담당했고 게시판이 필요한 부분에는
                            그누보드를 사용했습니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#웹퍼블리싱</p>
                            <p>#그누보드</p>
                            <p>#반응형웹</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="http://sungwon774.com/"
                                className="Site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                        </S.FlexWrap2>
                    </div>
                    <div className="projectslide">
                        <img
                            src="https://i.ibb.co/pr1yX3x/image.png"
                            alt="daejangkyeong-main"
                        />
                        <h2>대장경식품</h2>
                        <p className="subinfo">실무작업물</p>
                        <h3>
                            실제 서비스 되고 있는 브랜드 사이트 입니다. 전체 퍼블리싱과
                            반응형작업, 유지보수를 담당했고 게시판이 필요한 부분에는
                            그누보드를 사용했습니다.
                        </h3>
                        <S.FlexWrap2>
                            <p>#웹퍼블리싱</p>
                            <p>#그누보드</p>
                            <p>#반응형웹</p>
                        </S.FlexWrap2>
                        <S.FlexWrap2>
                            <a
                                href="http://www.djgfood.com/"
                                className="Site"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiExternalLink/>
                                사이트 바로가기
                            </a>
                        </S.FlexWrap2>
                    </div>
                </Slider>
            </S.PageWrap>
        </S.Page4>
    );
};

export default Page4;