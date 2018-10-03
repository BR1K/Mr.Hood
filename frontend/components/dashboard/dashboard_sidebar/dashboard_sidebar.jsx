import React from 'react';
import Portfolio from './portfolio/portfolio_container';
import Watchlist from './watchlist/watchlist_container';

const DashboardSidebar = ({ stocks, holdings, watchlist, portfolioValue }) => {

  return(
    <section className='dashboard-sidebar'>
        <Portfolio
          portfolioValue={portfolioValue}
          holdings={holdings}
        />
        <Watchlist
          watchlist={watchlist}
        />
    </section>
  );


};

export default DashboardSidebar;
