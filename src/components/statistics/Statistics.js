import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <p>Good: {this.props.good}</p>
          </li>
          <li>
            <p>Neutral: {this.props.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.props.bad}</p>
          </li>
          <li>
            <p>Total: {this.props.total}</p>
          </li>
          <li>
            <p>Positive feedback: {this.props.positivePercentage} %</p>
          </li>
        </ul>
      </>
    );
  }
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}