import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer} from 'recharts';
import { currencyFormatter } from '../../../util/formatter';

class DashboardChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      asOf: 'Latest Value',
    }
  }

  render() {
    const data = Object.values(this.props.data).map(snapshot => {
      return snapshot.value;
    });


    const min = Math.min(...data);
    const max = Math.max(...data);
    const portfolioValue = this.props.portfolio.portfolio.value;

    return (
      <div className='stock-chart'>

        <div className="chart">

          <div className="chart-header">
            <div className="stock-chart-price">
              {currencyFormatter.format(this.props.livePortfolioValue)}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={Object.values(this.props.data)} margin={{top:25, bottom: 25}} >
              <Line
                type="linear"
                dataKey="value"
                strokeWidth={2} stroke='#21ce99'
                dot={false}
                isAnimationActive={false}
              />
              <YAxis
                hide={true}
                domain={[min, max]}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>
        <br/>
        </div>
    )
  }

}
export default DashboardChart;
