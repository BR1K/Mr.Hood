import React from 'react';
import { connect } from 'react-redux';
import { watchStock, unwatchStock, fetchWatchlist } from '../../actions/stock_actions';
import WatchlistButton from './watchlist_button';


const mapStateToProps = (state, ownProps) => {

  return {
    
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  watchStock: (id) => dispatch(watchStock(id)),
  unwatchStock: (id) => dispatch(unwatchStock(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(WatchlistButton);
