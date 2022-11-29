import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback }) => {
  return (
    <div className={css.feedbackBtns}>
      <button className={css.good} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.neutral} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.bad} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
