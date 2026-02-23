import { mockStaindingsData } from '@premier_league_tables/shared/mocks/mock';
import { StandingsTable } from '../components/StandingsTable';

export const HomePage = () => {
    const tableData = mockStaindingsData.standings[0].table;
  return (
    <div>
      <h2>トップページ (/)</h2>
      <p>ここに順位表とシミュレーションボタンを置きます。</p>
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
};