import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="buttons">
      {options.map(option => {
        return (
          <button
            className="feedback-button"
            type="button"
            key={option}
            onClick={onLeaveFeedback[option + 'Click']}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.shape({
    goodClick: PropTypes.func.isRequired,
    neutralClick: PropTypes.func.isRequired,
    badClick: PropTypes.func.isRequired,
  }).isRequired,
};
