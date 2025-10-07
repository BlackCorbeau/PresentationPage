import './App.css'
import CardPage from './components/cardSection/cardSection'
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberProfile from './pages/memberPage/memberPage';

function App() {

  return (
    <ConfigProvider locale={ruRU}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CardPage />} />
            <Route path="/member/:id" element={<MemberProfile />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App
