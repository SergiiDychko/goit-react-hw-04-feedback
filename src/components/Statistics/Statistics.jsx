import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Statistics.module.css';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad }) => {
const total = good + neutral + bad;
const positiveFeedbackPercentage = Math.round((good / total) * 100);

  useEffect(() => {}, [good, neutral, bad]);

  return total ? (
    <table>
      <tbody>
        <tr>
          <td>Good:</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral:</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad:</td>
          <td>{bad}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Positive feedback:</td>
          <td>{positiveFeedbackPercentage}%</td>
        </tr>
      </tfoot>
    </table>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;