import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
import StockCardChart1 from '../charts/stock_card_chart/stock_card_chart_container1';

class StockCard2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading2: true,
      refresh2: null,
    };

    this.updatePrice2 = this.updatePrice2.bind(this);
  }



  componentDidMount() {
    this.props.fetchPeerPrice2(this.props.peer)
      .then(() => this.props.fetchPeerStats2(this.props.peer))
      .then(() => this.props.fetchPeerCompany2(this.props.peer))
      .then(() => this.props.fetchPeerChart2(this.props.peer, "1D"))
      .then(() => {
        const refresh = setInterval(this.updatePrice2, 5000);
        this.setState({
          refresh2: refresh,
          loading2: false
        });
      }
    )
  }

  componentWillUnmount() {
    clearInterval(this.state.refresh2);
  }


  updatePrice2() {

    const currentPrice = this.props.price;
    this.props.fetchPeerPrice2(this.props.peer).then(
      newPrice => {
        if (currentPrice !== newPrice) {
          this.props.price = newPrice
        }
      }
    )
  }

  render() {
    
    if (this.state.loading2) {
      return <div>loading...</div>
    } else {
      return (

        <Link to={`/stocks/${this.props.companyData.symbol}`} className="stock-card">
          <div className="stock-card-header">
            <div className="stock-card-name">{this.props.companyData.companyName}</div>
            <div className="stock-card-symbol">{this.props.companyData.symbol}</div>
          </div>
          <div className="stock-card-body">
            <StockCardChart1
              stock={this.props.peer}
              price={this.props.price}
              stats={this.props.stats}
              chart={this.props.chart}
            />
            <div className="stock-card-price">${this.props.price}</div>
          </div>
        </Link>
      )
    }
  }


}

export default withRouter(StockCard2);
