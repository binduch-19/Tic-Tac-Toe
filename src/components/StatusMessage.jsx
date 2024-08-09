import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

StatusMessage.propTypes = {
  winner: PropTypes.string,
  current: PropTypes.shape({
    board: PropTypes.arrayOf(PropTypes.string).isRequired,
    isXNext: PropTypes.bool.isRequired,
  }).isRequired,
};

export default StatusMessage;
