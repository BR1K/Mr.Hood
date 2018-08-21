// from https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
