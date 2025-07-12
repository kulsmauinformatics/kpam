/**
 * Main application component with routing configuration
 * Sets up the navigation structure for the Kakondo Protected Area Management website
 */

import { HashRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import FocusArea from './pages/FocusArea';
import Projects from './pages/Projects';
import Team from './pages/Team';
import News from './pages/News';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import GetInvolved from './pages/GetInvolved';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus-area" element={<FocusArea />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </HashRouter>
  );
}