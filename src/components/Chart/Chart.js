import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // obtain an array of values of props.items from ExpenseChart
  const maxArrValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  // deconstructing it
  const totalMaxValue = Math.max(...maxArrValue);

  // passing data to ChartBar
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
}

export default Chart;
