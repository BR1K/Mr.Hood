import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const handleClick = (id, history) => {
  return (e) => {
    history.push(`/stocks/${id}`);
  };
};

const renderTableRows = (holdings, stocks, history) =>  (
  Object.keys(holdings).map((stockId, idx) => {
    let numStocks = holdings[stockId];

    if (numStocks > 0) {
      return(
        <tr key={idx} className="main-table-row"
          onClick={handleClick(stockId, history)}>
          <td className="portfolio-symbol">{stocks[stockId - 1].symbol}</td>
          <td className="portfolio-holdings">{numShares} shares</td>
          <td className="stock-price">
            {this.props.fetchPrice(stocks[stockId - 1].symbol)}
          </td>
        </tr>
      );
    }
  })
);

const renderStocks = (holdings, stocks, history) => (
  <table className="sidebar-table">
    <tbody>
      {renderTableRows(holdings, stocks, history)}
    </tbody>
  </table>
);

const Portfolio = ({ holdings, stocks, history }) => {
  return(
    <aside className="sidebar-box">
      <h3 className="sidebar-header-one">Portfolio</h3>
      <div className="sidebar-info">
        {renderStocks(holdings, stocks, history)}
      </div>
      <div>AAPL</div>
      <div>NFLX</div>
      <div>TRXC</div>
    </aside>
  );
};


export default withRouter(Portfolio);
