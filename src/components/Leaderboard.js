
function Leaderboard({data}) {
  return (
    <div className="leaderboard">
      <h2 className="leaderboard__header">Leaderboard</h2>
      <table className="leaderboard__table">
        <thead className="leaderboard__table__head">
          <td>Name</td>  
          <td>Score</td>  
        </thead>   
        <tbody>
          { data.map((board) => (
            <tr>
              <td>{board.user}</td>
              <td>{board.score}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
