import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PortfolioItem from './portfolio_item';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.portfolioItems = this.portfolioItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchPortfolio()
    .then(() => this.props.fetchStocks())
  }

  portfolioItems() {
    let symbols = Object.keys(this.props.holdings);
    let holdings = [];
    for (let i = 0; i < symbols.length; i++) {
      let symbol = symbols[i];
      holdings.push (
        <PortfolioItem
          className="portfolio-row"
          key={i}
          symbol={symbol}
          holdings={this.props.holdings[symbol]}
        />
      )
    }

    return holdings;
  }

  render() {

    return (
      <ul className="watchlist">
        <h3 className="portfolio-header">Portfolio</h3>
        <div className="portfolio-body">
          {this.portfolioItems()}
        </div>
      </ul>
    )
  }
}

export default withRouter(Portfolio)



// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
//
// const handleClick = (symbol, history) => {
//   return (e) => {
//     history.push(`/stocks/${symbol}`);
//   };
// };
//
//
// const renderTableRows = (holdings, stocks, history) =>  {
//
//
//   return (
//     Object.keys(holdings).map( (symbol, idx) => {
//       let numStocks = holdings[symbol];
//       if (numStocks > 0) {
//         return(
//           <div key={idx} className="portfolio-row"
//             onClick={handleClick(symbol, history)}>
//             <div className="stock-symbol">{symbol}</div>
//             <div className="portfolio-holdings">{numStocks} shares</div>
//             <div className="stock-price">
//             </div>
//           </div>
//         );
//       }
//     })
//   );
// };
//
// const renderStocks = (holdings, stocks, history) => {
//   //
//   return(
//       <div>
//         {renderTableRows(holdings, stocks, history)}
//       </div>
//   );
// };
//
// const Portfolio = ({ holdings, stocks, history }) => {
//   //
//   return(
//     <aside className="portfolio">
//       <h3 className="portfolio-header">Portfolio</h3>
//       <div className="portfolio-body">
//         {renderStocks(holdings, stocks, history)}
//       </div>
//     </aside>
//   );
// };
//
//
// export default withRouter(Portfolio);
