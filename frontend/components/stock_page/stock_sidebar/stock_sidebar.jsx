import React from 'react';
import Tabs from './tabs';
import Buy from './buy_container';
import Sell from './sell_container';

const sections = (stock, price) => {

  return (
    [
      { header: `Buy ${stock.symbol}`,
      body: <Buy stock={stock} price={price} />},
      { header: `Sell ${stock.symbol}`,
      body: <Sell stock={stock} price={price} />},
    ]

  )
};

const StockSidebar = ({ stock, price }) => {
  return (

    <section className='stock-sidebar'>
      <Tabs sections={sections(stock, price)} />
    </section>
  )

}


export default StockSidebar;
