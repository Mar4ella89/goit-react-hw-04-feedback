import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, votes, percent }) => {
  if (votes === 0) return (
    <Notification message={`There is no feedback ¯|_(ツ)_|¯`}/>
  )
  
  return (
    
    <ul className={css.statList}>
      <li className={css.statItem}>
        <span>Good:</span>
        <span className={css.good}> {good}</span>
      </li>
      <li className={css.statItem}>
        <span>Neutral:</span>
        <span className={css.neutral}> {neutral}</span>
      </li>
      <li className={css.statItem}>
        <span>Bad:</span>
        <span className={css.bad}> {bad}</span>
      </li>
      <li className={css.statItem}>
        <span>Total:</span>
        <span> {votes}</span>
      </li>
      <li className={css.statItem}>
        <span>Positive feedback:</span>
        <span> {percent}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;
