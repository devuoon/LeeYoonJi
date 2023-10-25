import React, { useEffect } from "react";
import * as S from "../page.style";
import GaugeChart from "react-gauge-chart";

const Page3 = () => {
  useEffect(() => {
    let gauge = Gauge(document.getElementById("gauge1"), {
      max: 100,
      dialStartAngle: -90,
      dialEndAngle: -90.001,
      value: 100,
      label: function (value) {
        return Math.round(value * 100) / 100;
      },
    });
  }, []);

  return (
    <>
      <S.Title>
        <h2>TECH STACK</h2>
        <p>아이콘에 마우스를 올리면 자세한 설명을 볼 수 있습니다.</p>
      </S.Title>
      <GaugeChart id="gauge1" className="gauge-container">
        <span className="label">DEFAULT</span>
      </GaugeChart>
    </>
  );
};

export default Page3;
