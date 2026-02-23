import { mockStaindingsData } from '@premier_league_tables/shared/mocks/mock';
import { StandingsTable } from './components/StandingsTable';
import './App.css';


function App() {
  const tableData = mockStaindingsData.standings[0].table;

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Premier League Standings (Mock)</h1>
      
      <StandingsTable tableData={tableData} />

      <div style={{ marginBottom: '20px' }}>
        <button 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          onClick={() => console.log('シミュレーション開始ボタンが押されました')}
        >
          シミュレーション開始
        </button>
      </div>

    </div>
    
  );
}

export default App
