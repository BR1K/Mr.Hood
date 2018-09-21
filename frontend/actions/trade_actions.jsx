import * as TradeAPIUtil from '../util/trade_api_util';

export const RECEIVE_TRADE = "RECEIVE_TRADE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveTrade = (trade) => ({
  type: RECEIVE_TRADE,
  trade
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createTrade = (trade) => (dispatch) => (
  TradeAPIUtil.createTrade(trade)
    .then((newTrade) => dispatch(receiveTrade(newTrade)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
