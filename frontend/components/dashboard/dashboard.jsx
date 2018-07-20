import React    from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardChart from '../charts/dashboard_chart/dashboard_chart';
import SearchBar from '../navbar/search/search_container';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }


  componentDidMount() {
    // debugger
    // this.props.fetchStocks();
    this.props.fetchPortfolio(this.props.currentUser.id)
      .then(() => this.props.fetchPortfolioSnapshots(this.props.currentUser.id))
      .then(() => this.setState({loading: false}));
  }


  render() {

    if (this.state.loading) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <div>
            <h1>Dashboard</h1>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
          </div>
          <div>
            <SearchBar stocks={this.props.stocks}></SearchBar>
            <DashboardSidebar
              stocks={this.props.stocks}
              holdings={this.props.currentUser.holdings}>
            </DashboardSidebar>
          </div>
        </div>
      );
    }
  };

};



export default Dashboard




//
// componentDidMount() {
//   console.log('hello world')
//   const user = this.props.currentUser;
//   // User object is available
//   console.log(user);
//   // const { stockWatchList = ['AAPL', 'MSFT'] } = user;
//   const stockWatchList = ['AAPL', 'MSFT'];
//
//   Promise.all(
//     stockWatchList.map(stockSym => {
//       return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSym}&interval=1min&apikey=PK7DV11EJ8OQEYVU`)
//       .then(res => res.json())
//     })
//   ).then(stockResponses => {
//
//     //      console.log(Object.keys(stockResponses[0], stockResponses[0]['Time Series (1min)']), '<<<<<')
//     const data = Object.keys(stockResponses[0]['Time Series (Daily)']).map(key => {
//       return {
//         name: key,
//         value: parseFloat(stockResponses[0]['Time Series (Daily)'][key]["3. low"])
//       }
//     })
//     console.log('>>>>>>', data)
//     this.setState({stocks: data })
//     //console.log(data);
//     return data;
//   }).then(res => console.log(res))
// }
