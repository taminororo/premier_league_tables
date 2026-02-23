
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SimulationPage } from './pages/SimulationPage';
import { RankingPage } from './pages/RankingPage';


function App() {
  

  return (
    <BrowserRouter>
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>

      <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '15px' }}>トップ</Link>
          <Link to="/simulation" style={{ marginRight: '15px' }}>シミュレーション結果</Link>
          <Link to="/ranking">ランキング</Link>
      </nav>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/ranking" element={<RankingPage />} />
      </Routes>

      

    </div>
    </BrowserRouter>
    
  );
}

export default App
