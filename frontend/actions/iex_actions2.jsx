import * as IEXAPIUtil2 from '../util/iex_api_util2';

export const RECEIVE_PEER_PRICE = "RECEIVE_PEER_PRICE";
export const RECEIVE_PEER_STATS = "RECEIVE_PEER_STATS";
export const RECEIVE_PEER_CHART = "RECEIVE_PEER_CHART";
export const RECEIVE_PEER_COMPANY_DATA = "RECEIVE_PEER_COMPANY_DATA";


export const receivePeerPrice = peerPrice => {
  return {
    type: RECEIVE_PEER_PRICE,
    peerPrice
  };
};

export const receivePeerStats = peerStats => {
  return {
    type: RECEIVE_PEER_STATS,
    peerStats
  };
};

export const receivePeerChart = peerChart => {
  return {
    type: RECEIVE_PEER_CHART,
    peerChart
  };
};

export const receivePeerCompanyData = peerCompanyData => {
  return {
    type: RECEIVE_PEER_COMPANY_DATA,
    peerCompanyData
  };
};



export const fetchPeerPrice = (symbol) => (dispatch) => (
  IEXAPIUtil2.fetchPeerStockPrice(symbol).then((price) => { dispatch(receivePeerPrice(price)); return price; })
);

// export const fetchLiveStockPrice = (symbol) => (dispatch) => (
//   IEXAPIUtil.fetchLiveStockPrice(symbol).then(() => dispatch(receivePrice()))
// );

export const fetchPeerChart = (symbol, range) => (dispatch) => (
  IEXAPIUtil2.fetchStockChart(symbol, range).then((chart) => dispatch(receivePeerChart(chart)))
);

export const fetchPeerCompany = (symbol) => (dispatch) => (
  IEXAPIUtil2.fetchPeerStockCompany(symbol).then((company) => dispatch(receivePeerCompanyData(company)))
);

export const fetchPeerStats = (symbol) => (dispatch) => (
  IEXAPIUtil2.fetchPeerStockStats(symbol).then((stats) => dispatch(receivePeerStats(stats)))
);
