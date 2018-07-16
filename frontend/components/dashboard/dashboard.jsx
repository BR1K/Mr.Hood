import React    from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardChart from '../charts/dashboard_chart/dashboard_chart';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = [];

  }

  componentDidMount() {
    const user = window.currentUser;
    // User object is available
    console.log(window.currentUser);
    // const { stockWatchList = ['AAPL', 'MSFT'] } = user;
    const stockWatchList = ['AAPL', 'MSFT'];

    Promise.all(
      stockWatchList.map(stockSym => {
        return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSym}&interval=1min&apikey=PK7DV11EJ8OQEYVU`)
        .then(res => res.json())
      })
    ).then(stockResponses => {

      console.log(stockResponses)

    })
  }


  render() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </div>
        <div>
          <DashboardChart></DashboardChart>
          <DashboardSidebar></DashboardSidebar>
        </div>
      </div>
    );
  }

}



export default Dashboard
