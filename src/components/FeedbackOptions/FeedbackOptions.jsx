import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleIncrement }) => {
  return (
    <div className={css.btnWrapper}>
      {options.map(item => {
        let colorClass = [css.btn, css[item]];
        return (
          <button
            key={item}
            type="button"
            className={colorClass.join(' ')}
            onClick={() => handleIncrement(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
