import React from 'react';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';


class StockCardChart1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: '1D',
      loading: true,
    }

  }


  render() {
    debugger
    let data = this.props.chart.filter(datum => datum.close);
    let dataArray = data.map(datum => {
      return datum.close;
    });

    const max = data.reduce((a, b) => Math.max(a, b), 0);
    const min = data.reduce((a, b) => Math.min(a, b), 0);

    return (
      <div className="stock-card-chart">

        <ResponsiveContainer width="100%" height={100}>
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
      </div>
    )
  }
}

export default StockCardChart1;
