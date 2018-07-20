import * as FillAPIUtil from '../util/trade_api_util';

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
  FillAPIUtil.createFill(trade)
    .then((newTrade) => dispatch(receiveFill(newTrade)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
