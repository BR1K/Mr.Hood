import React from 'react';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../util/formatter';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.trade;
    
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.createTrade(this.state);
  }

  // renderErrors() {
  //
  //   return(
  //     this.props.errors.map((error, idx) => (
  //       <li key={`error-${idx}`}>
  //         {error}
  //       </li>
  //     ))
  //   );
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {

    let estimatedWord = this.state.trade_type === "buy" ? "Cost" : "Credit";
    let submitClass = "submit";


    return(
      this.state.price === -1 ?
        <div>Loading ...</div>
      :
      <section className="trade-form-container">
        <form className="trade-form" onSubmit={this.handleSubmit}>
          <div className="shares">
            <label>Shares</label>
            <input type="number" min="1" step="1" placeholder=""
              onChange={this.handleChange('size')}/>
          </div>

          <div className="market-price">
            <label>Market Price</label>
            <div>
              {currencyFormatter.format(this.state.price)}
            </div>
          </div>

          <div className="estimated">
            <label>Estimated {estimatedWord}</label>
            <div>
              {currencyFormatter.format(this.state.price * this.state.size)}
            </div>
          </div>

          <div className="submit-trade">
            <input id="trade-button" type="submit" value="Place Order"/>
          </div>

      </form>

      <div className="message">
        <div>{this.props.message}</div>
      </div>

    </section>
    );
  }
}

export default withRouter(TradeForm);

// <ul className="trade-errors">
//   {this.renderErrors()}
// </ul>
