import * as IEXAPIUtil from '../util/iex_api_util';

export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const RECEIVE_STATS = "RECEIVE_STATS";
export const RECEIVE_CHART = "RECEIVE_CHART";
export const RECEIVE_COMPANY_DATA = "RECEIVE_COMPANY_DATA";
export const RECEIVE_TOP_STOCKS = "RECEIVE_TOP_STOCKS";
export const RECEIVE_LOGO = "RECEIVE_LOGO";
export const RECEIVE_PEERS = "RECEIVE_PEERS";
export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_MARKET_NEWS = "RECEIVE_MARKET_NEWS";


export const receivePrice = price => {
  return {
    type: RECEIVE_PRICE,
    price
  };
};

export const receiveStats = stats => {
  return {
    type: RECEIVE_STATS,
    stats
  };
};

export const receiveChart = chart => {
  return {
    type: RECEIVE_CHART,
    chart
  };
};

export const receiveCompanyData = companyData => {
  return {
    type: RECEIVE_COMPANY_DATA,
    companyData
  };
};

export const receiveTopStocks = topStocks => {
  return {
    type: RECEIVE_TOP_STOCKS,
    topStocks
  };
};

export const receiveLogo = book => {
  return {
    type: RECEIVE_LOGO,
    logo
  };
};

export const receivePeers = peers => {
  return {
    type: RECEIVE_PEERS,
    peers
  };
};

export const receiveNews = news => {
  return {
    type: RECEIVE_NEWS,
    news
  };
};

export const receiveMarketNews = marketNews => {
  return {
    type: RECEIVE_MARKET_NEWS,
    marketNews
  };
};

export const fetchPrice = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchStockPrice(symbol).then((price) => dispatch(receivePrice(price)))
);

// export const fetchLiveStockPrice = (symbol) => (dispatch) => (
//   IEXAPIUtil.fetchLiveStockPrice(symbol).then(() => dispatch(receivePrice()))
// );

export const fetchChart = (symbol, range) => (dispatch) => (
  IEXAPIUtil.fetchStockChart(symbol, range).then((chart) => dispatch(receiveChart(chart)))
);

export const fetchCompany = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchStockCompany(symbol).then((company) => dispatch(receiveCompanyData(company)))
);

export const fetchStats = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchStockStats(symbol).then((stats) => dispatch(receiveStats(stats)))
);

export const fetchTopStocks = () => (dispatch) => (
  IEXAPIUtil.fetchBestPerformingStocks().then((stocks) => dispatch(receiveTopStocks(stocks)))
);

export const fetchLogo = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchStockLogo(symbol).then((logo) => dispatch(receiveLogo(logo)))
);

export const fetchPeers = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchSimilarStocks(symbol).then((peers) => dispatch(receivePeers(peers)))
);

export const fetchNews = (symbol) => (dispatch) => (
  IEXAPIUtil.fetchStockNews(symbol).then((news) => dispatch(receiveNews(news)))
);

export const fetchMarketNews = () => (dispatch) => (
  IEXAPIUtil.fetchMarketNews().then((marketNews) => dispatch(receiveMarketNews(marketNews)))
);
