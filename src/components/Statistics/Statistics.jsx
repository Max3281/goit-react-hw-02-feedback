import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad }) {
  return (
    <ul className="statistics-list">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {Number(good + neutral + bad)}</li>
      <li>
        Positive feedback:{' '}
        {Number((good * 100) / (good + neutral + bad)) || '0'}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
