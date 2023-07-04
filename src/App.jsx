import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './app/pages/HomePage'
import Layout from './app/pages/Layout'
import SearchPage from './app/pages/SearchPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />

      <Route path="/search-results" element={<SearchPage />} />
    </Routes>
  );
}

export default App
