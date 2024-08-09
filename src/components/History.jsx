import PropTypes from 'prop-types';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => moveTo(move)}
              >
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      board: PropTypes.arrayOf(PropTypes.string).isRequired,
      isXNext: PropTypes.bool.isRequired,
    })
  ).isRequired,
  moveTo: PropTypes.func.isRequired,
  currentMove: PropTypes.number.isRequired,
};

export default History;
