import * as newsAPIUtil from '../util/news_api_util';

export const RECEIVE_MARKET_NEWS = "RECEIVE_MARKET_NEWS";

export const receiveMarketNews = (marketNews) => {
  return {
    type: RECEIVE_MARKET_NEWS,
    marketNews
  };
};

export const fetchMarketNews = () => (dispatch) => (
  newsAPIUtil.fetchMarketNews().then((marketNews) => dispatch(receiveMarketNews(marketNews)))
);
