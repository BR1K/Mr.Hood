# Mr. Hood

Mr. Hood is a full-stack, single-page stock trading/investment application built with Ruby on Rails and React.js. Users can invest in real companies with live market data, without spending any money. Mr. Hood's design was inspired by [Robinhood's](https://www.robinhood.com/) web application.

All stock data is provided by IEX's awesome API. Check out the cool work they're doing [here](https://iextrading.com/developer/).

The live news feed is made possible by [News API](https://newsapi.org/), and chart rendering was done with the help of [Recharts](http://recharts.org/en-US/).

## Features

### [Dashboard](#dashboard)
- **Portfolio Chart**: historical performance is rendered using portfolio snapshots
- **[Portfolio Value](#portfolio)**: a live portfolio value is calculated using the user's holdings and current stock price
- **[Top Movers]()**: a list of daily top-moving stocks
- **[Watchlist]()**: add or remove stocks to your watchlist!
- **[News Feed]()**: View realtime general market news & stock specific news


### [Stock Page](#stock-page)

- **Stock Chart**: Historical price performance for any given stock. Users can change the chart's time range (1D, 1M, 3M, 6M, 1Y, 2Y, 5Y)
- **About Section**: A detailed look at a company, including a description, and metrics such as market cap, revenue, etc.
- **[Trading](#trading)**: Users can buy or sell shares, which will update their portfolio and buying power.
- **[Peers](#peers)**: a list of companies similar to the current company; users can compare similar stocks

### Other
- **User authorization:** the handy Ruby gem [bcrypt](https://rubygems.org/gems/bcrypt/versions/3.1.12) allows for secure hashing & salting and ensures authorization
- **[Search]()**: search stocks by their stock symbol
- **Realtime stock prices**: Stock prices are fetched every few seconds throughout the application. API calls are made to the [IEX API]() to ensure accurate information.
- **Useful errors:** Errors are present throughout the application to assist users in navigating around. Logging in without the correct credentials will produce errors, as well as signing up a user without completed fields. Additionally, trying to create a trade without the proper holdings or buying power will notify the user.


## [Demo](https://mrhood.herokuapp.com/)


### Dashboard
![dashboard](https://res.cloudinary.com/fullstackimages/image/upload/v1539194939/Mr.Hood/gifs/login.gif)
###### Once logged in, users are navigated to their dashboard, where they are presented with a chart of their trade history, as well as a [portfolio](#portfolio) value which is automatically re-calculated with every price change.


###### This page also includes several other features:

#### Top Movers
![top movers](https://res.cloudinary.com/fullstackimages/image/upload/v1539195485/Mr.Hood/gifs/topmovers.gif)
###### The Top Movers component offers users a live look at the day's most volatile stocks. Each stock card represents a single company, and includes that company's title, stock symbol, daily stock chart, and realtime stock price. Clicking on a stock card will take you to that stock's [show page](#stock-page).  This is a great way to discover new stocks to buy!

#### Portfolio
![portfolio](https://res.cloudinary.com/fullstackimages/image/upload/v1539195905/Mr.Hood/gifs/portfolio.gif)
###### This feature includes all of the user's holdings, which are each rendered as separate Portfolio Item components.

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
###### The search bar at the top of the application allows users to search any stock by its symbol. Clicking on any result will take the user to that stock's page.

#### Watchlist
![watchlist](https://res.cloudinary.com/fullstackimages/image/upload/v1539196505/Mr.Hood/gifs/watchlist.gif)
###### Users also have the ability to add stocks to their watchlist, where they have easy access to their charts and live prices from the dashboard.

#### News
![news](https://res.cloudinary.com/fullstackimages/image/upload/v1539197370/Mr.Hood/gifs/news.gif)
###### Scrolling to the bottom of the dashboard takes users to a live news feed, where they can read articles that might influence their trading activity. Clicking on any article takes you to the source's website.

### Stock Page
![stock page](https://res.cloudinary.com/fullstackimages/image/upload/v1539197971/Mr.Hood/gifs/stock_page.gif)
###### The stock page offers a more detailed look at any given company. User's can change the stock chart's range for more information on the stock's history, and check out the about section for general information. All prices are rendered in realtime!

###### This page also includes other features:

#### Trading
![trading](https://res.cloudinary.com/fullstackimages/image/upload/v1539200633/Mr.Hood/gifs/trading.gif)
###### Users have the ability to buy and sell shares! Navigate to a stock show page, and use the sidebar. Buying a new new stock will add to your portfolio.

#### Peers
![peers](https://res.cloudinary.com/fullstackimages/image/upload/v1539200625/Mr.Hood/gifs/Peers.gif)
###### Here users can check out similar companies and compare.

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


## Coming Soon
- Users will have the ability to search by company name as well. I'd also like to add a preview of each result company's current stock price.
- A profile page which will include detailed trade history, as well as the ability to update user information such as username, password, and buying power.
- A dashboard chart that updates with every trade action. The current dashboard chart is generated using seed data.
