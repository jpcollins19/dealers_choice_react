const Teams = ({ leagues, selectedLeague, selectedTeam, selectTeam }) => {
  return leagues
    .filter((league) => selectedLeague === league.id)
    .map((league, idx) => (
      <div key={idx}>
        <h1>Teams in the {league.name}</h1>
        <div className="team-info-cont">
          <div className="name-cont">
            {league.teams.map((team, idx) => (
              <div key={idx}>
                <div
                  onClick={() => selectTeam(team.id)}
                  className={selectedTeam === team.id ? "selected1" : ""}
                >
                  {team.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
};

export default Teams;
