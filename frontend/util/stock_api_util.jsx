// export const fetchStocks = (query) => (
//   $.ajax({
//     url: 'api/stocks',
//     method: 'GET',
//     data: { query },
//   })
// );
export const fetchStocks = () => (
  $.ajax({
    url: 'api/stocks',
    method: 'GET',
  })
);

export const fetchStock = (symbol) => (
  $.ajax({
    url: `api/stocks/${symbol}`,
    method: 'GET',
  })
);

export const fetchPeerStocks = (peer) => (
  $.ajax({
    url: 'api/stocks',
    method: 'GET',
    data: { peer },
  })
);

export const getPrice = (stock) => (
  $.ajax({
    url: `/api/stocks/${stock.id}`,
    method: "PATCH",
    data: { stock },
  })
);

export const fetchWatchlist = () => (
  $.ajax({
    url: `/api/watchlist_items`,
    method: 'GET',
  })
);

export const watchStock = (id) => (
  $.ajax({
    url: `/api/watchlist_items`,
    method: 'POST',
    data: { id },
  })
);

export const unwatchStock = (id) => (
  $.ajax({
    url: `/api/watchlist_items/${id}`,
    method: 'DELETE',
    data: { id },
  })
);
