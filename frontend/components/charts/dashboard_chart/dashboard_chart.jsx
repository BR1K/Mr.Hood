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
    debugger

    const min = Math.min(...data);
    const max = Math.max(...data);
    const portfolioValue = this.props.portfolio.portfolio.value;

    return (
      <div className='stock-chart'>

        <div className="chart">
          <div className="chart-header">
            <h1 className="company-name">Portfolio Chart</h1>
            <div className="stock-chart-price">{portfolioValue}</div>
            <div className="percent-change">
              <span className="percent">50</span>
              <span className="range"></span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={Object.values(this.props.data)} margin={{top:25, bottom: 25}} >
              <Line
                type="linear"
                dataKey="value"
                strokeWidth={2} stroke='#21ce99'
                dot={false}
                isAnimationActive={true}
                animationDuration={500}
                />
              <YAxis
                hide={true}
                domain={[min, max]}
                />
              <Tooltip
                wrapperStyle={{background: 'transparent', border: 'none', color: 'lightgray'}}
                cursor={{strokeWidth: 1}}
                offset={-90}
                isAnimationActive={false}
                position={{x: 0, y: 0 }}
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





























// import React from 'react';
// import { LineChart, XAxis, YAxis, CartesianGrid, Line} from 'recharts';
//
// const DashboardChart = ({ data }) => {
//
//   // const data = [
//   // { name: 'Page A', value: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
//   // { name: 'Page B', value: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
//   // { name: 'Page C', value: 280, pv: 1398, amt: 2400, uvError: 40 },
//   // { name: 'Page D', value: 200, pv: 9800, amt: 2400, uvError: 20 },
//   // { name: 'Page E', value: 278, pv: null, amt: 2400, uvError: 28 },
//   // { name: 'Page F', value: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
//   // { name: 'Page G', value: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
//   // { name: 'Page H', value: 189, pv: 4800, amt: 2400, uvError: 28 },
//   // { name: 'Page I', value: 189, pv: 4800, amt: 2400, uvError: 28 },
//   // { name: 'Page J', value: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
//   // ];
//     let arr = data.map(d => d.value);
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//
//   return (
//     <div>
//       <h2>Dashboard Chart</h2>
//
//       <LineChart width={500} height={300} data={data}>
//         <XAxis dataKey="name" dot={false} />
//         <YAxis domain={[min - min*.05, max + max*.05]}/>
//         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//
//         <Line type="linear" dot={false} dataKey="value" stroke="#82ca9d" />
//       </LineChart>
//     </div>
//
//
//   );
//
//
// };
//
// export default DashboardChart;
