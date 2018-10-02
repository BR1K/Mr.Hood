import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_PEER_STOCKS = "RECEIVE_PEER_STOCKS";
export const RESET_STOCKS = "RESET_STOCKS";

export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";

export const receiveWatch = (watch) => ({
  type: RECEIVE_WATCH,
  watch,
});

export const receiveWatchlist = (watchlist) => ({
  type: RECEIVE_WATCHLIST,
  watchlist,
});

export const receiveStocks = (stocks) => ({
  type: RECEIVE_STOCKS,
  stocks
});

export const receiveStock = (stock) => ({
  type: RECEIVE_STOCK,
  stock
});

export const receivePeerStocks = (peerStocks) => ({
  type: RECEIVE_PEER_STOCKS,
  peerStocks
})

export const resetStocks = () => ({
  type: RESET_STOCKS,
})

export const getPrice = (stock) => (dispatch) => (
  StockAPIUtil.getPrice(stock).then((stock) => dispatch(receiveStock(stock)))
);

export const fetchStocks = (query) => (dispatch) => (
  StockAPIUtil.fetchStocks(query).then((stocks) => dispatch(receiveStocks(stocks)))
);

export const fetchStock = (symbol) => (dispatch) => (
  StockAPIUtil.fetchStock(symbol).then((stock) => dispatch(receiveStock(stock)))
);

export const fetchPeerStocks = (peer) => (dispatch) => (
  StockAPIUtil.fetchPeerStocks(peer).then((peerStocks) => dispatch(receivePeerStocks(peerStocks)))
);

export const watchStock = (id) => (dispatch) => (
  StockAPIUtil.watchStock(id).then((stock) => dispatch(receiveWatch(stock)))
);

export const unwatchStock = (id) => (dispatch) => (
  StockAPIUtil.unwatchStock(id).then(({}) => dispatch(receiveWatchlist({})))
);

export const fetchWatchlist = () => (dispatch) => (
  StockAPIUtil.fetchWatchlist().then((watchlist) => dispatch(receiveWatchlist(watchlist)))
);

export const updateStockPrice = stock => dispatch => (
  StockAPIUtil.updateStockPrice(stock).then(stock => dispatch(receiveStock(stock)))
);
