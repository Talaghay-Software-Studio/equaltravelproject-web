import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './app/pages/HomePage'
import Layout from './app/pages/Layout'
import PrivacyPolicy from './app/pages/links/PrivacyPolicy';
import TermsAndConditions from './app/pages/links/TermsAndConditions';
import WebAccessibility from './app/pages/links/WebAccessibility';
import Disclaimer from './app/pages/links/Disclaimer';
import SearchPage from './app/pages/SearchPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route
        path="/web-accessibility-statement"
        element={<WebAccessibility />}
      />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/search-results" element={<SearchPage />} />
    </Routes>
  );
}

export default App
