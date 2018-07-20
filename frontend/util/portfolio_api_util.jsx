export const fetchPortfolio = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/portfolios/${id}`
  })
);

export const fetchPortfolioSnapshots = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/portfolio_snapshots`,
    data: { id }
  })
);
