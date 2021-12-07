import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Leagues from "./leagues/Leagues";
import Teams from "./teams/Teams";
import Players from "./players/Players";

const mainHTML = document.querySelector("#main-body");

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      leagues: [],
      teams: [],
      selectedLeague: "",
      selectedTeam: "",
    };
    this.selectLeague = this.selectLeague.bind(this);
    this.selectTeam = this.selectTeam.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  async componentDidMount() {
    try {
      const leagues = (await axios.get("./api/leagues")).data;
      const teams = (await axios.get("./api/teams")).data;
      this.setState({ leagues, teams });
    } catch (err) {
      console.log(err);
    }
  }

  selectLeague = (id) => {
    this.setState({ selectedLeague: id, selectedTeam: "" });
  };

  selectTeam = (id) => {
    this.setState({ selectedTeam: id });
  };

  addPlayer = async (name) => {
    const player = {
      name,
      teamId: this.state.selectedTeam,
    };

    (await axios.post(`/api/players`, player)).data;
  };

  deletePlayer = async (ev) => {
    const target = ev.target;
    const playerId = target.getAttribute("player-id");
    (await axios.delete(`/api/players/${playerId}`)).data;
    const teams = (await axios.get("./api/teams")).data;

    this.setState({ teams });
  };

  render() {
    const { leagues, selectedLeague, selectedTeam, teams } = this.state;
    const { selectLeague, selectTeam, addPlayer, deletePlayer } = this;
    return (
      <main>
        <Leagues
          leagues={leagues}
          selectedLeague={selectedLeague}
          selectLeague={selectLeague}
        />

        <div className="bottom box">
          <div id="team-names-box" className="left box">
            <Teams
              leagues={leagues}
              selectedLeague={selectedLeague}
              selectedTeam={selectedTeam}
              selectTeam={selectTeam}
            />
          </div>
          <div id="player-name-box" className="right box">
            <Players
              teams={teams}
              selectedTeam={selectedTeam}
              addPlayer={addPlayer}
              deletePlayer={deletePlayer}
            />
          </div>
        </div>
      </main>
    );
  }
}

window.React = React;
ReactDOM.render(<Main />, mainHTML);
