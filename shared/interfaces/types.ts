export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface TableEntry {
    position: number;
    team: Team;
    playedGames: number;
    form: string | null;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface Standing {
    stage: string;
    type: string;
    group: string | null;
    table: TableEntry[];
}

export interface StandingsResponse {
    filters: { season: string };
    area: { id: number; name: string; code: string; flag: string };
    competition: { id: number; name: string; code: string; type: string; emblem: string };
    season: { id: number; startDate: string; endDate: string; currentMatchday: number; winner: string | null };
    standings: Standing[];
}



// --- 残り試合取得用型定義 ---

export interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}

export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null; 
}

// 試合のスコア詳細
export interface MatchScoreTime {
    home: number | null; 
    away: number | null;
}

export interface Score {
    winner: string | null; // "HOME_TEAM", "AWAY_TEAM", "DRAW", または試合前なら null
    duration: string;      // "REGULAR" など
    fullTime: MatchScoreTime;
    halfTime: MatchScoreTime;
}

// 1試合分のデータ（ここが一番重要！）
export interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;        // キックオフ時間 (ISO 8601形式の文字列)
    status: string;         // "SCHEDULED", "TIMED", "FINISHED" など
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: Team;         
    awayTeam: Team;         
    score: Score;
    odds: {
        msg: string;
    };
    referees: any[];      
}

// APIレスポンス全体のデータ型
export interface MatchesResponse {
    filters: {
        season: string;
        status: string[];
    };
    resultSet: {
        count: number;
        first: string;
        last: string;
        played: number;
    };
    competition: Competition;
    matches: Match[];       // 上で定義した Match 型の配列
}