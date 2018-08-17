export const createTrade = (trade) => (
  $.ajax({
    url: `/api/trade`,
    method: 'POST',
    data: { trade }
  })
);
