import * as IEXAPIUtil3 from '../util/iex_api_util3';

export const RECEIVE_PEER_PRICE2 = "RECEIVE_PEER_PRICE2";
export const RECEIVE_PEER_STATS2 = "RECEIVE_PEER_STATS2";
export const RECEIVE_PEER_CHART2 = "RECEIVE_PEER_CHART2";
export const RECEIVE_PEER_COMPANY_DATA2 = "RECEIVE_PEER_COMPANY_DATA2";


export const receivePeerPrice2 = peerPrice2 => {
  return {
    type: RECEIVE_PEER_PRICE2,
    peerPrice2
  };
};

export const receivePeerStats2 = peerStats2 => {
  return {
    type: RECEIVE_PEER_STATS2,
    peerStats2
  };
};

export const receivePeerChart2 = peerChart2 => {
  return {
    type: RECEIVE_PEER_CHART2,
    peerChart2
  };
};

export const receivePeerCompanyData2 = peerCompanyData2 => {
  return {
    type: RECEIVE_PEER_COMPANY_DATA2,
    peerCompanyData2
  };
};



export const fetchPeerPrice2 = (symbol) => (dispatch) => (
  IEXAPIUtil3.fetchPeerStockPrice(symbol).then((price) => { dispatch(receivePeerPrice2(price)); return price; })
);

// export const fetchLiveStockPrice = (symbol) => (dispatch) => (
//   IEXAPIUtil.fetchLiveStockPrice(symbol).then(() => dispatch(receivePrice()))
// );

export const fetchPeerChart2 = (symbol, range) => (dispatch) => (
  IEXAPIUtil3.fetchStockChart(symbol, range).then((chart) => dispatch(receivePeerChart2(chart)))
);

export const fetchPeerCompany2 = (symbol) => (dispatch) => (
  IEXAPIUtil3.fetchPeerStockCompany(symbol).then((company) => dispatch(receivePeerCompanyData2(company)))
);

export const fetchPeerStats2 = (symbol) => (dispatch) => (
  IEXAPIUtil3.fetchPeerStockStats(symbol).then((stats) => dispatch(receivePeerStats2(stats)))
);
