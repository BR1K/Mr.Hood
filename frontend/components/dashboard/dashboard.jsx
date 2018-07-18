import React    from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardChart from '../charts/dashboard_chart/dashboard_chart';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
    };

  }

  componentDidMount() {
    console.log('hello world')
    const user = this.props.currentUser;
    // User object is available
    console.log(user);
    // const { stockWatchList = ['AAPL', 'MSFT'] } = user;
    const stockWatchList = ['AAPL', 'MSFT'];

    Promise.all(
      stockWatchList.map(stockSym => {
        return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSym}&interval=1min&apikey=PK7DV11EJ8OQEYVU`)
        .then(res => res.json())
      })
    ).then(stockResponses => {

//      console.log(Object.keys(stockResponses[0], stockResponses[0]['Time Series (1min)']), '<<<<<')
      const data = Object.keys(stockResponses[0]['Time Series (Daily)']).map(key => {
        return {
          name: key,
          value: parseFloat(stockResponses[0]['Time Series (Daily)'][key]["3. low"])
        }
      })
      console.log('>>>>>>', data)
      this.setState({stocks: data })
    //console.log(data);
      return data;
    }).then(res => console.log(res))
  }

  render() {

    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </div>
        <div>
          <DashboardChart data={this.state.stocks}></DashboardChart>
          <DashboardSidebar></DashboardSidebar>
        </div>
      </div>
    );
  };

};



export default Dashboard
