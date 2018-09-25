
export const fetchPeerStockPrice = (symbol) => (
  $.ajax({
    url:`https://api.iextrading.com/1.0/stock/${symbol}/price`,
    method: 'GET',
  })
);

// export const fetchLiveStockPrice = (symbol) => (
//   $.ajax({
//     url: `https://api.iextrading.com/1.0/tops/last?symbols=${symbol}`,
//     method: 'GET',
//   })
// );

// range examples: 5y, 2y, 1y, ytd, 6m, 3m, 1m, 1d
// default range = 1m (1 month)
// for latest stock, choose 1d and key into "minute" - last element in the array is the latest stock price
export const fetchStockChart = (symbol, range) => (
  $.ajax({
    url:`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`,
    method: 'GET',
  })
);

export const fetchPeerStockCompany = (symbol) => (
  $.ajax({
    url:`https://api.iextrading.com/1.0/stock/${symbol}/company`,
    method: 'GET',
  })
);

export const fetchPeerStockStats = (symbol) => (
  $.ajax({
    url:`https://api.iextrading.com/1.0/stock/${symbol}/stats`,
    method: 'GET',
  })
);

export const fetchBestPerformingStocks = () => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/market/list/gainers`,
    method: 'GET',
  })
);

export const fetchStockLogo = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/logo`,
    method: 'GET',
  })
);

export const fetchSimilarStocks = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/peers`,
    method: 'GET',
  })
);

// Gets last 5 articles:
export const fetchStockNews = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/news/last/5`,
    method: 'GET',
  })
);
