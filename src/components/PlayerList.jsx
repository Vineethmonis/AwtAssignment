function PlayerList({ team, players }) {
  return (
    <div>
      <h2>{team} - Released Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
