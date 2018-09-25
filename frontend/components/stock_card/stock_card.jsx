import React    from 'react';
import { Link, withRouter } from 'react-router-dom';

class StockCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refresh: null,
    };

    this.updatePrice = this.updatePrice.bind(this);
  }



  componentDidMount() {
    this.props.fetchPeerPrice(this.props.peer)
      .then(() => this.props.fetchPeerStats(this.props.peer))
      .then(() => this.props.fetchPeerCompany(this.props.peer))
      .then(() => {
        const refresh = setInterval(this.updatePrice, 5000);
        this.setState({
          refresh: refresh,
          loading: false
        });
      }
    )
  }

  componentWillUnmount() {
    clearInterval(this.state.refresh);
  }


  updatePrice() {

    const currentPrice = this.props.price;
    this.props.fetchPeerPrice(this.props.peer).then(
      newPrice => {
        if (currentPrice !== newPrice) {
          this.props.price = newPrice
        }
      }
    )
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    } else {
      return (

        <Link to={`/stocks/${this.props.companyData.symbol}`} className="stock-card">
          <div className="stock-card-header">
            <div className="stock-card-name">{this.props.companyData.companyName}</div>
            <div className="stock-card-symbol">{this.props.companyData.symbol}</div>
          </div>
          <div className="stock-card-body">
            <div className="stock-card-price">{this.props.price}</div>
          </div>
        </Link>



      )

    }





  }


}

export default withRouter(StockCard);
