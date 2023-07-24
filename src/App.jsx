import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './app/pages/HomePage'
import Layout from './app/pages/Layout'
import PrivacyPolicy from './app/pages/links/PrivacyPolicy';
import TermsAndConditions from './app/pages/links/TermsAndConditions';
import WebAccessibility from './app/pages/links/WebAccessibility';
import Disclaimer from './app/pages/links/Disclaimer';
import SearchPage from './app/pages/SearchPage'
import HostPage from './app/pages/HostPage';
import AddPropertyPage from './app/pages/AddPropertyPage'
import Unauthorized from './app/pages/Unauthorized';
import Account from './app/pages/Account';
import Blogs from './app/pages/Blogs';
// import RequireAuth from './app/pages/RequireAuth';
// import PersistLogin from './app/pages/PersistLogin';

function App() {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route
        path="/web-accessibility-statement"
        element={<WebAccessibility />}
      />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/search-results" element={<SearchPage />} />

      {/* Protected Routes */}

      {/* <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="/account" element={<Account />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/host-page" element={<HostPage />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/add-property" element={<AddPropertyPage />} />
        </Route>
      </Route> */}

      <Route path="/account" element={<Account />} />
      <Route path="/host-page" element={<HostPage />} />
      <Route path="/add-property" element={<AddPropertyPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App
