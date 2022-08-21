import React, { Component } from 'react';
import Statistics from 'components/statistics';
import FeedbackOptions from './components/feedbackOptions';
import Section from 'components/section/Section';
import Notification from 'components/notification/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback =
      (100 * this.state.good) / this.countTotalFeedback();

    return Math.round(positiveFeedback);
  }

  feedbackButtonClick = e => {
    e.preventDefault();

    const name = e.currentTarget.name;
    this.increaseValue(name);
  };

  increaseValue = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackButtonClick} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;

// good={this.state.good}
//     neutral={this.state.neutral}
//     bad={this.state.bad}
