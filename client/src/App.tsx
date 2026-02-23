import { mockStaindingsData } from '@premier_league_tables/shared/mocks/mock';
import { StandingsTable } from './components/StandingsTable';
import './App.css';


function App() {
  const tableData = mockStaindingsData.standings[0].table;

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Premier League Standings (Mock)</h1>
      {/* さっき作ったコンポーネントにデータを渡す */}
      <StandingsTable tableData={tableData} />
    </div>
  );
}

export default App
