import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WatchlistItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: {
        data: null,
        error: null,
      },
      chart: {
        data: null,
        error: null,
      },
      loading: true,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
  }
