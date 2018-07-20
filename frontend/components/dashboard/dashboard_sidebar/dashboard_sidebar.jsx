import React from 'react';
import Portfolio from './portfolio/portfolio_container';
// import Watchlist from './watchlist/watchlist';

const DashboardSidebar = ({ stocks, holdings, watchlist }) => {


  return(
    <section className='dashboard-sidebar'>
      <div className="scrollable">
        <Portfolio
          holdings={holdings}
          stocks={stocks}
        />
      </div>
    </section>
  );


};

export default DashboardSidebar;
