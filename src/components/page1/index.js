import React, { useState, useEffect, useRef } from "react";
import * as S from "../page.style";
import useScrollPosition from "../../hook/scroll";

const phrases = ["Hello, world", "LEE YOON JI PORTFOLIO", "FRONTEND DEVELOPER"];

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const Page1 = () => {
  const textRef = useRef(null);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const el = textRef.current;
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2500);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <S.ScrollStyle>
      <S.Page1 id="Page1" className="container">
        <div
          className={`text ${scrollPosition > 100 ? "hidden_7" : "visible_7"}`}
          ref={textRef}
        ></div>
        <S.ScrollWrap
          className={scrollPosition > 100 ? "hidden_7" : "visible_7"}
        >
          <a href="/">
            <span></span>
            scroll
          </a>
        </S.ScrollWrap>
      </S.Page1>
    </S.ScrollStyle>
  );
};

export default Page1;
