import React, { Component } from "react";
import * as S from "../page.style";
import ReactApexChart from "react-apexcharts";

class Page3 extends Component {
  render() {
    const chartsData = [
      // HTML5
      {
        series: [95],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
                image: "https://i.ibb.co/pv7gztf/HTML5.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Tech 1"],
        },
      },
      // CSS3
      {
        series: [95],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/pX9t0J8/css3.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["CSS3"],
        },
      },
      // JavaScript
      {
        series: [75],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/PWvLLWj/js.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["JavaScript"],
        },
      },
      // Jquery
      {
        series: [60],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/KXyYC20/jquery.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Jquery"],
        },
      },
      // React
      {
        series: [75],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/3skQK6c/reactjs.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["React"],
        },
      },
      // TypeScript
      {
        series: [65],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image:
                  "https://i.ibb.co/8m82dz6/typescript-original-logo-icon-146317.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["TypeScript"],
        },
      },
      // VS Code
      {
        series: [90],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/pwHZvr7/vscode.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["VS Code"],
        },
      },
      // Git
      {
        series: [80],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/X20W2n0/git.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Git"],
        },
      },
      // Postman
      {
        series: [50],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/yfVvNr9/postman.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Postman"],
        },
      },
      // Photoshop
      {
        series: [90],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/4Kxm0rV/photoshop.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Photoshop"],
        },
      },
      //illustrator
      {
        series: [90],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/WFhWH40/illustrator.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["illustrator"],
        },
      },
      //Figma
      {
        series: [75],
        options: {
          chart: {
            height: 200,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
                image: "https://i.ibb.co/txRHjf7/figma.png",
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  show: false,
                  color: "#fff",
                },
                value: {
                  show: true,
                  color: "#333",
                  offsetY: 40,
                  fontSize: "15px",
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
          labels: ["Figma"],
        },
      },
    ];

    return (
      <S.PageWrap id="Page3">
        <S.Title>
          <h2>TECH STACK</h2>
          <p>아이콘에 마우스를 올리면 자세한 설명을 볼 수 있습니다.</p>
        </S.Title>
        <S.Title2>#FRONT-END</S.Title2>
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
    );
  }
}

export default Page3;
