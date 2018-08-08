import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_PEER_STOCKS = "RECEIVE_PEER_STOCKS";
export const RESET_STOCKS = "RESET_STOCKS";

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

export const fetchStocks = (query) => (dispatch) => (
  StockAPIUtil.fetchStocks(query).then((stocks) => dispatch(receiveStocks(stocks)))
);

export const fetchStock = (symbol) => (dispatch) => (
  StockAPIUtil.fetchStock(symbol).then((stock) => dispatch(receiveStock(stock)))
);

export const fetchPeerStocks = (peer) => (dispatch) => (
  StockAPIUtil.fetchPeerStocks(peer).then((peerStocks) => dispatch(receivePeerStocks(peerStocks)))
);
