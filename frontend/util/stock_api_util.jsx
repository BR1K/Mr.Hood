export const fetchStocks = (query) => (
  $.ajax({
    url: 'api/stocks',
    method: 'GET',
    data: { query }
  })
);

export const fetchStock = (id) => (
  $.ajax({
    url: `api/stocks/${id}`,
    method: 'GET',
  })
);
