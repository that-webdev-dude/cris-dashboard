// import "default-passive-events";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const colors = {
  primary: "#544ac3",
  secondary: "#f26c6d",
  text: "#5d5d68",
};

const ChartBar = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    chartInstance = echarts.init(chartRef.current, "svg");

    const generateRandomData = () => {
      const xAxisData = [];
      const yAxisData = [];
      const currentYear = new Date().getFullYear();
      for (let i = currentYear - 6; i <= currentYear; i++) {
        xAxisData.push(i);
      }
      for (let i = 0; i < 7; i++) {
        const randomValue = Math.floor(Math.random() * (10 - 2 + 1) + 2);
        yAxisData.push(randomValue);
      }
      return { xAxisData, yAxisData };
    };
    const { xAxisData, yAxisData } = generateRandomData();

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        backgroundColor: colors.text,
        textStyle: {
          color: "#ffffff",
        },
        extraCssText: "width: 100spx;",
        formatter: "{c}",
      },
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: {
          lineStyle: {
            color: "transparent",
            width: 0,
            type: "solid",
          },
        },
        axisTick: {
          alignWithLabel: true,
          length: 10,
          lineStyle: {
            color: "transparent",
          },
        },
        axisLabel: {
          interval: 0,
          rotate: 0,
          margin: 20,
          color: colors.text,
          fontSize: 10,
        },
      },
      yAxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      series: [
        {
          data: yAxisData,
          type: "bar",
          barWidth: "60%",
          emphasis: {
            itemStyle: {
              color: colors.secondary,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 2,
            },
          },
          itemStyle: {
            borderRadius: [8, 8, 8, 8],
            color: colors.primary,
          },
        },
      ],
    };

    chartInstance.setOption(options);
    const handleResize = () => {
      if (chartInstance) {
        chartInstance.resize();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        margin: "-2rem auto 0.5rem",
        height: "288px",
        maxWidth: "512px",
        padding: "0",
      }}
    />
  );
};

export default ChartBar;
