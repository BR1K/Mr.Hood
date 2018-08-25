export const fetchMarketNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4226cafc50bd426c9118f3cee7fbc084`
  })
);

export const fetchGeneralNews = (company) => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?q=${company}&apiKey=4226cafc50bd426c9118f3cee7fbc084`
  })
);
