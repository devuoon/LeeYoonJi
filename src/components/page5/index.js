import React, { useEffect, useRef } from "react";
import * as S from "../page.style";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Page5 = () => {
  useEffect(() => {
    AOS.init();
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const confirmSend = window.confirm("이메일을 보내시겠습니까?");

    if (confirmSend) {
      emailjs
        .sendForm(
          "yoonji",
          "template_12jdb3k",
          form.current,
          "IEDERXR86aRLx2rNm"
        )
        .then(
          (result) => {
            alert("소중한 의견 감사합니다. 빠른 시일 내에 답변드리겠습니다.");

            window.location.reload();
          },
          (error) => {
            alert("이메일이 전송 되지 않았습니다. 잠시 후 다시 시도해주세요.");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <S.Page5>
      <S.PageWrap id="Page5">
        <S.Title>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            CONTACT ME
          </h2>
        </S.Title>
        <S.FormWrap
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <form ref={form} onSubmit={sendEmail}>
            <label>From</label>
            <input
              type="email"
              name="from_email"
              placeholder="보내시는 분의 이메일을 입력해주세요."
            />
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
            />
            <label>Message</label>
            <textarea name="message" placeholder="내용을 입력해주세요." />
            <input type="submit" value="Send me an email" />
          </form>
        </S.FormWrap>
      </S.PageWrap>
    </S.Page5>
  );
};

export default Page5;
