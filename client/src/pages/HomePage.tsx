import { useState } from 'react';
import {  mockMatchesData } from '@premier_league_tables/shared/mocks/mocks2';
import {  mockStaindingsData } from '@premier_league_tables/shared/mocks/mock';
import { StandingsTable } from '../components/StandingsTable';
import { runSimulation } from '../utils/simulate';

export const HomePage = () => {

  const [tableData, setTableData] = useState(mockStaindingsData.standings[0].table);


  const handleSimulate = () => {
  
    const newTable = runSimulation(tableData, mockMatchesData.matches);
    

    setTableData(newTable);
  };

  // リセット用の処理（元の順位表に戻す）
  const handleReset = () => {
    setTableData(mockStaindingsData.standings[0].table);
  };

  return (
    <div>
      <h1>Premier League Standings (Mock)</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
          onClick={handleSimulate} 
        >
          シミュレーション開始
        </button>
        
        <button 
          style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}
          onClick={handleReset}
        >
          リセット
        </button>
      </div>

      <StandingsTable tableData={tableData} />
    </div>
  );
};