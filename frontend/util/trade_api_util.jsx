export const createTrade = (trade) => (
  $.ajax({
    url: `/api/trades`,
    method: 'POST',
    data: { trade }
  })
);
