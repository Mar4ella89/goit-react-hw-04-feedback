import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import css from './App.module.css';

const App = () => {
  
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = votes;

  const handleIncrement = feedbackName => {
    setVotes(prevState => {
      return { ...prevState, [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const values = Object.values(votes);
    return values.reduce((sum, prev) => prev + sum, 0);
  };

  const countPositiveFeedbackPercentage = total => {
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };

  const totalVotes = countTotalFeedback();
  const percentPositiveFeedback = countPositiveFeedbackPercentage(totalVotes);

  return (
    <>
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(votes)}
            handleIncrement={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            votes={totalVotes}
            percent={percentPositiveFeedback}
          />
        </Section>
      </div>
    </>
  );
};

export default App;
