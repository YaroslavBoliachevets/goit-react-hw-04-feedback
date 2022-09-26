import { useState } from 'react';
import Statistics from 'components/statistics';
import FeedbackOptions from './components/feedbackOptions';
import Section from 'components/section/Section';
import Notification from 'components/notification/';

export default App;

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (100 * good) / countTotalFeedback();

    return Math.round(positiveFeedback);
  }

  const feedbackButtonClick = event => {
    event.preventDefault();

    const name = event.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={feedbackButtonClick} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
}