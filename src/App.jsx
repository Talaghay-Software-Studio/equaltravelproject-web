import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './app/pages/HomePage'
import Layout from './app/pages/Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
        <Route index element={<HomePage />} />
    </Routes>
  )
}

export default App
