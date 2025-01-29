import { ResponsiveLine } from "@nivo/line";
import data from "./data.js";
import props from "./props.js";
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const chartStyle = {
  display: "flex",
  flexDirection: "row",
  height: "80%",
  width: "80%",
};

function App() {
  return (
    <div style={containerStyle}>
      <div style={chartStyle}>
        <ResponsiveLine {...props} data={data} />
      </div>
    </div>
  );
}

export default App;
