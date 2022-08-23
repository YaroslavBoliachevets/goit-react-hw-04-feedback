import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonList, FeedbackButton } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {

  render() {
    return (
      <ButtonList>
        <li>
          <FeedbackButton
            name="good"
            type="button"
            onClick={(e) => {this.props.onLeaveFeedback(e)}}
          >
            Good
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton
            name="neutral"
            type="button"
            onClick={(e) => {this.props.onLeaveFeedback(e)}}
          >
            Neutral
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton
            name="bad"
            type="button"
            onClick={(e) => {this.props.onLeaveFeedback(e)}}
          >
            Bad
          </FeedbackButton>
        </li>
      </ButtonList>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
}
