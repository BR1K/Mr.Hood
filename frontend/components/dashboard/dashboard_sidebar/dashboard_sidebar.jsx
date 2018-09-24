import React from 'react';
import Portfolio from './portfolio/portfolio_container';
// import Watchlist from './watchlist/watchlist';

const DashboardSidebar = ({ stocks, holdings, watchlist }) => {


  return(
    <section className='dashboard-sidebar'>
        <Portfolio
          holdings={holdings}
          stocks={stocks}
        />
    </section>
  );


};

export default DashboardSidebar;
