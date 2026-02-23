import type { TableEntry, Match } from '@premier_league_tables/shared/interfaces/types';

// 0〜4点のランダムなスコアを生成する関数
const getRandomGoals = () => Math.floor(Math.random() * 5);

export const runSimulation = (currentTable: TableEntry[], remainingMatches: Match[]): TableEntry[] => {
    // 1. 元のデータを書き換えないよう、ディープコピーを作成（structuredCloneを使うと簡単です）
    const simulatedTable = structuredClone(currentTable);

    // 2. 各試合の結果をランダムに決定して反映
    remainingMatches.forEach(match => {
        // TIMED（キックオフ時間決定済み）または SCHEDULED な試合のみ処理
        if (match.status !== 'TIMED' && match.status !== 'SCHEDULED') return;

        const homeGoals = getRandomGoals();
        const awayGoals = getRandomGoals();

        // 順位表の中から対戦する2チームを探し出す
        const homeTeam = simulatedTable.find(row => row.team.id === match.homeTeam.id);
        const awayTeam = simulatedTable.find(row => row.team.id === match.awayTeam.id);

        if (!homeTeam || !awayTeam) return;

        // 試合数と得失点を加算
        homeTeam.playedGames += 1;
        awayTeam.playedGames += 1;
        
        homeTeam.goalsFor += homeGoals;
        homeTeam.goalsAgainst += awayGoals;
        homeTeam.goalDifference += (homeGoals - awayGoals);

        awayTeam.goalsFor += awayGoals;
        awayTeam.goalsAgainst += homeGoals;
        awayTeam.goalDifference += (awayGoals - homeGoals);

        // 勝敗に応じた勝ち点（Points）の加算
        if (homeGoals > awayGoals) {
            homeTeam.won += 1;
            homeTeam.points += 3;
            awayTeam.lost += 1;
        } else if (homeGoals < awayGoals) {
            awayTeam.won += 1;
            awayTeam.points += 3;
            homeTeam.lost += 1;
        } else {
            homeTeam.draw += 1;
            homeTeam.points += 1;
            awayTeam.draw += 1;
            awayTeam.points += 1;
        }
    });

    // 3. プレミアリーグのルールで並び替え（勝ち点 ＞ 得失点差 ＞ 総得点）
    simulatedTable.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
        return b.goalsFor - a.goalsFor;
    });

    // 4. 新しい順位 (position) を振り直す
    simulatedTable.forEach((row, index) => {
        row.position = index + 1;
    });

    return simulatedTable;
};