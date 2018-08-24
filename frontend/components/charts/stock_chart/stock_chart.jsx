import React from 'react';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { MoonLoader } from 'halogenium';


class StockChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: '1Y',
      loading: true,
      // change: '',
      // pastRange: '',
    }

    this.updateRange = this.updateRange.bind(this);
  }

  componentDidMount() {
    this.props.fetchChart(this.props.stock.symbol, this.state.range)
    .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.reRender();
    }
  }

  updateRange(newRange) {
    this.setState({ range: newRange });
    this.props.fetchChart(this.props.stock.symbol, newRange)
  }

  reRender() {
    if (this.state.loading === true) {
      return null;
    }

    let timeLabel;
    let profit;

    let data = this.props.chart;
    let filteredData = data.filter((datum) => datum.close > 0);
    if (this.state.range === "1D") {
      timeLabel = 'Latest Price';
      let priceChange = (filteredData.slice(0, 1).close - this.props.price);
      let profitNum = priceChange / this.props.price;
      let profitPercent = (profitNum * 100).toFixed(2);
      profit = `${profitPercent}%`;
    } else if (this.state.range === "1M") {
        timeLabel = "Past Month";
        profit = (this.props.stats.month1ChangePercent * 100).toFixed(2);
    } else if (this.state.range === "3M") {
        timeLabel = "Past 3M";
        profit = (this.props.stats.month3ChangePercent * 100).toFixed(2);
    } else if (this.state.range === "1Y") {
        timeLabel = "Past Year";
        profit = (this.props.stats.year1ChangePercent * 100).toFixed(2);
    } else if (this.state.range === "2Y") {
        timeLabel = "Past 2Y";
        profit = (this.props.stats.year2ChangePercent * 100).toFixed(2);
    } else if (this.state.range === "5Y") {
        timeLabel = "Past 5Y";
        profit = (this.props.stats.year5ChangePercent * 100).toFixed(2);
    } else {
        timeLabel = "";
        profit = "";
    }

    this.setState({
      change: `${profit}%`,
      // pastRange: timeLabel
    })
  }


  render() {
    let data = this.props.chart.filter(datum => datum.close);
    let dataArray = data.map(datum => {
      return datum.close;
    });

    const max = data.reduce((a, b) => Math.max(a, b), 0);
    const min = data.reduce((a, b) => Math.min(a, b), 0);

    const ranges = ['1D', '1M', '3M', '1Y', '2Y', '5Y'];
    const rangeButtons = ranges.map((range, i) => {
      return  <button
          key={i}
          className="range-buttons"
          width={400}
          onClick={() => this.updateRange(range)}>
          {range}
        </button>
    });


    return (
      this.state.loading ?
        <div>
          <MoonLoader
            className="loading-icon"
            color="#26A65B"
            size="20px"
            margin="5px"
            />
        </div>
      :
      <div className="stock-chart">


        <div className="chart">
          <div className="chart-data">
            <div className="stock-chart-price">Price: {this.props.price}</div>
            <div className="percent-change">
              <span className="percent">Percent Change: {this.state.change}</span>
              <span className="range"></span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{top:25, bottom: 25}} >
              <Line
                type="linear"
                dataKey="high"
                strokeWidth={2} stroke="#21ce99"
                dot={false}
                isAnimationActive={true}
                />

              <YAxis
                hide={true}
                domain={[min, max]}
                />
            </LineChart>
          </ResponsiveContainer>
          <div className="button-list">
            <ul>{rangeButtons}</ul>
          </div>
        </div>

      </div>
    )
  }
}

export default StockChart;

// const StockChart = () => {
//
//
//
//   return (
//     <div>
//       <h2>Stock Chart</h2>
//     </div>
//   );
//
//
// };
