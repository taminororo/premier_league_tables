import type { TableEntry } from  "@premier_league_tables/shared/interfaces/types";


interface Props {
  tableData: TableEntry[];
}

export const StandingsTable = ({ tableData }: Props) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table border={1} cellPadding={8} style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>順位</th>
            <th style={{ textAlign: 'left' }}>クラブ</th>
            <th>試合</th>
            <th>勝</th>
            <th>分</th>
            <th>負</th>
            <th>得</th>
            <th>失</th>
            <th>差</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.team.id}>
              <td>{row.position}</td>
              <td style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* エンブレム画像も表示できます！ */}
                <img src={row.team.crest} alt={`${row.team.shortName} crest`} width="24" height="24" />
                {row.team.name}
              </td>
              <td>{row.playedGames}</td>
              <td>{row.won}</td>
              <td>{row.draw}</td>
              <td>{row.lost}</td>
              <td>{row.goalsFor}</td>
              <td>{row.goalsAgainst}</td>
              <td>{row.goalDifference}</td>
              <td><strong>{row.points}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
