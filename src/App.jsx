import React,{useState} from 'react'
import Counter from './components/Counter'
import Password from './components/Password'
import Team from "./components/Team";
import PlayerList from "./components/PlayerList";
import "./App.css"

const App = () => {
  const teams = [
    "CSK", "MI", "RCB", "KKR", "RR",
    "SRH", "DC", "PBKS", "GT", "LSG"
  ];

  const [selectedTeam, setSelectedTeam] = useState("");
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  async function showPlayers(team) {
    setSelectedTeam(team);
    setPlayers([]);
    setError("");

    try {
      const response = await fetch("/players.json");

      if (!response.ok) {
        throw new Error("Unable to load players");
      }

      const data = await response.json();
      setPlayers(data[team] || []);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div>
        <Counter />
        <Password />
        <div className="container">
          <h1>IPL Released Players</h1>
          <p>Select an IPL Team</p>

          <div className="teams">
            {teams.map((team) => (
              <Team
                key={team}
                name={team}
                onSelect={showPlayers}
              />
            ))}
          </div>

          {error && <p>{error}</p>}

          {selectedTeam && !error && (
            <PlayerList
              team={selectedTeam}
              players={players}
            />
          )}
        </div>
    </div>
  )
}

export default App