// import "default-passive-events";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const colors = {
  primary: "#544ac3",
  secondary: "#f26c6d",
  text: "#5d5d68",
};

const ChartLine = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    chartInstance = echarts.init(chartRef.current, "svg");

    const generateRandomData = () => {
      const xAxisData = [];
      const seriesData1 = [];
      const seriesData2 = [];

      const currentYear = new Date().getFullYear();
      for (let i = currentYear - 6; i <= currentYear; i++) {
        xAxisData.push(i);
        seriesData1.push(Math.floor(Math.random() * 100));
        seriesData2.push(Math.floor(Math.random() * 100));
      }

      return { xAxisData, seriesData1, seriesData2 };
    };

    const { xAxisData, seriesData1, seriesData2 } = generateRandomData();

    const options = {
      grid: {
        left: "0%",
        right: "0%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        backgroundColor: colors.primary,
        textStyle: {
          color: "#ffffff",
        },
        extraCssText: "width: 100spx; padding: 1.5rem;",
        formatter: "{a0}: {c0}<br />{a1}:    {c1}",
      },
      legend: {
        width: "100%",
        right: 0,
        textStyle: {
          color: colors.text,
        },
        data: [
          {
            name: "Technical",
            icon: "circle",
            itemStyle: {
              color: colors.primary,
            },
            textStyle: {
              color: colors.primary,
            },
          },
          {
            name: "Service",
            icon: "circle",
            itemStyle: {
              color: colors.secondary,
            },
            textStyle: {
              color: colors.secondary,
            },
          },
        ],
      },
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: {
          lineStyle: {
            color: "transparent",
            width: 0,
            type: "dashed",
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
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 100,
          position: "left",
          splitLine: { show: true },
        },
        {
          type: "value",
          min: 0,
          max: 100,
          position: "right",
          splitLine: { show: false },
        },
      ],
      series: [
        {
          name: "Technical",
          data: seriesData1,
          yAxisIndex: 1,
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            color: colors.primary,
            width: 3,
          },
        },
        {
          name: "Service",
          data: seriesData2,
          yAxisIndex: 0,
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            color: colors.secondary,
            width: 3,
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
      style={{ width: "100%", height: "400px", margin: "-1.65rem auto 0" }}
    />
  );
};

export default ChartLine;
