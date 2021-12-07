const Players = ({ teams, selectedTeam, addPlayer, deletePlayer }) => {
  return teams
    .filter((team) => selectedTeam === team.id)
    .map((team, idx) => (
      <div key={idx}>
        <h1>{team.name} Players</h1>
        <div className="input-name-cont">
          <input id="add-player-name" placeholder="insert name" />
        </div>
        <div className="button-cont">
          <button id="add" onClick={() => addPlayer(name)}>
            Add A Player
          </button>
        </div>
        <div className="player-info-cont">
          <div className="player-name-cont">
            {team.players.map((player, idx) => (
              <div key={idx}>
                {player.name}{" "}
                <button
                  id="delete"
                  player-id={player.id}
                  onClick={deletePlayer}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
};
export default Players;
