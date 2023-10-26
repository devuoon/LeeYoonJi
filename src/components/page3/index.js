import React, { Component } from "react";
import * as S from "../page.style";
import ReactApexChart from "react-apexcharts";
import { chartsData } from "./chartData";
import { ProgressBar } from "react-progressbar-fancy";

class Page3 extends Component {
  render() {
    return (
      <S.Page3>
        <S.PageWrap id="Page3">
          <S.Title>
            <h2>TECH STACK</h2>
            <p>아이콘에 마우스를 올리면 자세한 설명을 볼 수 있습니다.</p>
          </S.Title>
          <S.Title2>#FRONT-END</S.Title2>
          <ProgressBar score={25} />
          <S.ChartWrap id="chart">
            {chartsData.slice(0, 6).map((chartData, index) => (
              <div key={index} className="chart">
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="radialBar"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </S.ChartWrap>

          <S.Title2>#USING TOOL</S.Title2>
          <S.ChartWrap id="chart">
            {chartsData.slice(6, 12).map((chartData, index) => (
              <div key={index} className="chart">
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="radialBar"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </S.ChartWrap>
        </S.PageWrap>
      </S.Page3>
    );
  }
}

export default Page3;
