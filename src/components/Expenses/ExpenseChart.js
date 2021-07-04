import Chart from "../Chart/Chart";
function ExpenseChart(props) {
  // data to store the value
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //getting the actual value from RenderExpense
  for (const data of props.items) {
    const month = data.date.getMonth(); // month starts from 0 so Jan is 0
    chartData[month].value += data.amount;
  }

  return <Chart dataPoints={chartData}></Chart>;
}
export default ExpenseChart;
