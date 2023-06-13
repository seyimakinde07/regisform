import ReactEcharts from "echarts-for-react";

const GlobalCampaign = () => {
  const option = {
    title: {
      text: "Campaigns",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    color: ["#273472", "#91CC75", "#EE6666"],
    grid: {
      left: "0%",
      right: "4%",
      bottom: "10%",
      containLabel: false,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Subscribers",
        type: "bar",
        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50],
          },
          normal: {
            barBorderRadius: [50, 50, 50, 50],
          },
        },
        barWidth: "35%",
        data: [400, 562, 260, 354, 390, 330, 220, 890, 900, 890, 760, 450],
      },
      {
        name: "Emails",
        type: "line",
        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50],
          },
          normal: {
            barBorderRadius: [50, 50, 50, 50],
          },
        },
        barWidth: "35%",
        data: [400, 562, 260, 354, 390, 330, 220, 890, 900, 890, 760, 450],
      },
      {
        name: "Rates",
        type: "bar",
        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50],
          },
          normal: {
            barBorderRadius: [50, 50, 50, 50],
          },
        },
        barWidth: "35%",
        data: [300, 262, 160, 454, 490, 530, 120, 590, 500, 690, 560, 850],
      },
    ],
  };

  return (
    <div className="chart">
      <ReactEcharts option={option} />
    </div>
  );
};

export default GlobalCampaign;
