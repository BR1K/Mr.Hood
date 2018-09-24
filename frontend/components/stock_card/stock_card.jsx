import React    from 'react';
import { Link, withRouter } from 'react-router-dom';

class StockCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refresh: null,
    };

  }



  componentDidMount() {
    debugger
    this.props.fetchPrice(this.props.peer)
      .then(() => this.props.fetchStats(this.props.peer))
      .then(() => this.props.fetchCompany(this.props.peer))
      debugger
  }

  // updatePrice() {
  //   const currentPrice = this.props.stock.price;
  //   this.props.fetchPrice(this.props.stock.symbol).then(
  //     newPrice => {
  //       if (currentPrice !== newPrice) {
  //         this.props.stock.price = newPrice
  //       }
  //     }
  //   )
  // }

  render() {


    return (

      <div className="stock-card">
        <div>hello</div>
      </div>



    )




  }


}

export default StockCard
