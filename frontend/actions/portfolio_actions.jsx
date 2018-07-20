import * as PortfolioAPIUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";
export const RECEIVE_SNAPSHOTS = "RECEIVE_SNAPSHOTS";

export const receivePortfolio = (portfolio) => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
});

export const receiveSnapshots = (snapshots) => ({
  type: RECEIVE_SNAPSHOTS,
  snapshots
});

export const fetchPortfolio = (id) => (dispatch) => (
  PortfolioAPIUtil.fetchPortfolio(id)
    .then((portfolio) => dispatch(receivePortfolio(portfolio)))
);

export const fetchPortfolioSnapshots = (id) => (dispatch) => (
  PortfolioAPIUtil.fetchPortfolioSnapshots(id)
    .then((snapshots) => dispatch(receiveSnapshots(snapshots)))
);
