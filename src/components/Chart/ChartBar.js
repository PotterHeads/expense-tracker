import "./ChartBar.css";

function ChartBar(props) {
  // determine the height of the bar
  // stored in string because it will be passed as css
  let barFillHeight = "0%";
  // max value is greater than 0
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
