import React from 'react';

class WatchlistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "",
    }
  }

  componentDidMount() {
    this.props.fetchWatchlist();

  }


  render() {
    
    let handleClick;
    let text;
    if (this.props.watchlist[this.props.stock.symbol]) {

      handleClick = () => this.props.unwatchStock(this.props.stock.id);
      text = "Remove from Watchlist";
    } else {
      handleClick = () => this.props.watchStock(this.props.stock.id);
      text = "Add to Watchlist";
    }

    return (
      <div className="watchlist-button" onClick={handleClick}>
        {text}
      </div>
    );

  }

}

export default WatchlistButton;
