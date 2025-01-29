const tickValues = [
  "initial",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export default {
  theme: {
    axis: {
      ticks: { text: { fill: "#333", fontSize: 14 } },
      legend: { text: { fill: "#333", fontSize: 14 } },
    },
    dots: { text: { fill: "#222", fontSize: 14 } },
    grid: { line: { stroke: "#ccc", strokeWidth: 1 } },
    labels: { text: { fill: "#333", fontSize: 13 } },
    legends: { text: { fontSize: 14 } },
    markers: { text: { fontSize: 14 } },
    tooltip: {
      container: { background: "white", color: "#333", fontSize: ".8em" },
    },
  },
  animate: false,
  groupMode: "grouped",
  legends: [
    {
      effects: [
        {
          on: "hover",
          style: { itemBackground: "rgba(0, 0, 0, .03)", itemOpacity: 1 },
        },
      ],
      itemsSpacing: 0,
      symbolShape: "circle",
      translateX: 95,
      translateY: 0,
      itemDirection: "left-to-right",
      justify: false,
      itemWidth: 80,
      anchor: "bottom-right",
      itemOpacity: 0.75,
      symbolSize: 12,
      itemHeight: 20,
      direction: "column",
      itemTextColor: "#333",
    },
  ],
  axisLeft: {
    legendOffset: 0,
    orient: "left",
    tickPadding: 5,
    legendPosition: "middle",
    format: ".2~s",
    tickRotation: 0,
    tickSize: 5,
  },
  motionStiffness: 90,
  dotSize: 10,
  dotLabel: "",
  motionDamping: 15,
  axisBottom: {
    legendOffset: 0,
    orient: "bottom",
    legend: "",
    tickPadding: 5,
    legendPosition: "middle",
    tickRotation: 0,
    tickSize: 5,
    tickValues: tickValues,
  },
  colorCount: 4,
  dotBorderColor: "#000000",
  margin: { top: 13, right: 76, bottom: 38, left: 50 },
  enableDotLabel: true,
  yScale: { type: "linear", stacked: false, min: 0, max: "auto" },
  pointSize: 10,
  gridXValues: tickValues,
  axisTop: null,
  tooltipFormat: ",.2f",
  dotColor: "inherit:darker(0.3)",
  axisRight: null,
  colors: ["#f94144", "#ffd166", "#06d6a0", "#118ab2"],
  enableSlices: "x",
  sliceTooltip: ({ slice: { points } }) => {
    if (!points) {
      return null;
    }
    return (
      <div
        style={{
          background: "white",
          padding: "1rem",
          border: "1px solid #ccc",
        }}
      >
        {points.map((point) => (
          <div key={point.index} style={{ margin: "0.25rem" }}>
            {point.serieId}: {point.data.y}
          </div>
        ))}
      </div>
    );
  },
};
