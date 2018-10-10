# Mr. Hood

Mr. Hood is a full-stack, single-page stock trading/investment application built with Ruby on Rails and React.js. Users can invest in real companies with live market data, without spending any money. Mr. Hood's design was inspired by [Robinhood's](https://www.robinhood.com/) web application.

## [Demo](https://mrhood.herokuapp.com/)


### Dashboard
![dashboard](https://res.cloudinary.com/fullstackimages/image/upload/v1539194939/Mr.Hood/gifs/login.gif)
###### Once logged in, users are navigated to their dashboard, where they are presented with a chart of their trade history, as well as a [portfolio](https://mrhood.herokuapp.com/) value which is automatically re-calculated with every [price change](https://mrhood.herokuapp.com/).


###### This page also includes several other features:

#### Top Movers
![top movers](https://res.cloudinary.com/fullstackimages/image/upload/v1539195485/Mr.Hood/gifs/topmovers.gif)
###### The Top Movers component offers users a live look at the day's most volatile stocks. Each stock card represents a single company, and includes that company's title, stock symbol, daily stock chart, and [realtime](https://mrhood.herokuapp.com/) stock price. Clicking on a stock card will take you to that stock's [show page](https://mrhood.herokuapp.com/).  This is a great way to discover new stocks to buy!

#### Portfolio
![portfolio](https://res.cloudinary.com/fullstackimages/image/upload/v1539195905/Mr.Hood/gifs/portfolio.gif)
###### This feature includes all of the user's holdings, each rendered as separate Portfolio Item components.

###### Every Portfolio Item component includes the stock symbol, live stock chart, live stock price, as well as how many shares that user owns. Buying a new stock will add to this list, while selling all of your shares in a company will remove that portfolio item.

###### Each stock price is fetched every few seconds so that stock prices remain accurate. In order to reduce clutter in the global state, I decided to make the API calls to IEX in in the Portfolio Item components themselves, and use each component's local state to store in the information and trigger re-rendering:

```javascript
  fetchPrice(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/price`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          price: { data: result }
        });
      },
      (error) => {
        this.setState({
          price: { error }
        });
      }
    )
  }
```

#### Search
![search](https://res.cloudinary.com/fullstackimages/image/upload/v1539196936/Mr.Hood/gifs/search.gif)
###### The Top Movers component offers users a live look at the day's most volatile stocks. Each stock card represents a single company, and includes that company's title, stock symbol, daily stock chart, and [realtime](https://mrhood.herokuapp.com/) stock price. Clicking on a stock card will take you to that stock's [show page](https://mrhood.herokuapp.com/).  This is a great way to discover new stocks to buy!

#### Watchlist
![watchlist](https://res.cloudinary.com/fullstackimages/image/upload/v1539196505/Mr.Hood/gifs/watchlist.gif)
###### The Top Movers component offers users a live look at the day's most volatile stocks. Each stock card represents a single company, and includes that company's title, stock symbol, daily stock chart, and [realtime](https://mrhood.herokuapp.com/) stock price. Clicking on a stock card will take you to that stock's [show page](https://mrhood.herokuapp.com/).  This is a great way to discover new stocks to buy!

#### News
![news](https://res.cloudinary.com/fullstackimages/image/upload/v1539197370/Mr.Hood/gifs/news.gif)

### Stock Page
![stock page](https://res.cloudinary.com/fullstackimages/image/upload/v1539197971/Mr.Hood/gifs/stock_page.gif)
######

## Technologies

- Backend:
  - Ruby on Rails
  - ActiveRecord
  - PostgreSQL
- Frontend:
  - React/ Redux
  - Recharts
  - IEX API
  - News API


### Features

Mr. Hood currently supports the following features

- User authorization  
- Search
- Dashboard
- Stock research
- Portfolio
- Realtime stock prices
- Live news feed
- Stock peers
- Daily Top-moving stocks
- Useful errors
