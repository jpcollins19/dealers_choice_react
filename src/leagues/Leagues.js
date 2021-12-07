const Leagues = ({ leagues, selectedLeague, selectLeague }) => {
  return (
    <div id="top-5-leagues-cont" className="top box">
      <h1>
        <a href="/">Top 5 Soccer Leagues</a>
      </h1>
      <div id="league-info-cont-full">
        {leagues.map((league, idx) => (
          <div
            key={idx}
            className={`league-info-cont-single-border ${
              selectedLeague === league.id ? "selected" : ""
            }`}
          >
            <div
              className="league-info-cont-single"
              onClick={() => selectLeague(league.id)}
            >
              <img
                className="flag"
                src={`../public/pics/${league.name}-flag.png`}
              />
              <h4>{league.name}</h4>
              <img
                className="league-logo"
                src={`../public/pics/${league.name}-logo.png`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
