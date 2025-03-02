import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Analytics from './pages/dashboard/Analytics';
import Brands from './pages/dashboard/Brands';
import AddBrand from './pages/dashboard/AddBrand';
import Platform from './pages/dashboard/Platform';
import SocialMedia from './pages/dashboard/SocialMedia';
import CreatePost from './pages/dashboard/CreatePost';
import Upgrade from './pages/dashboard/Upgrade';
import Assets from './pages/dashboard/Assets';
import Advertising from './pages/dashboard/Advertising';
import HelixDesk from './pages/dashboard/HelixDesk';
import VirtualStaff from './pages/dashboard/VirtualStaff';
import Credits from './pages/dashboard/Credits';

// Basic page component for other routes
const BasicPage = ({ title }) => (
  <div className="flex items-center justify-center h-[calc(100vh-2rem)] text-2xl">
    {title}
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <BasicPage title="Dashboard" />
            </DashboardLayout>
          } />
          <Route path="/dashboard/create" element={
            <DashboardLayout>
              <CreatePost />
            </DashboardLayout>
          } />
          <Route path="/dashboard/ai-tools" element={
            <DashboardLayout>
              <BasicPage title="AI Tools" />
            </DashboardLayout>
          } />
          <Route path="/dashboard/social-media" element={
            <DashboardLayout>
              <SocialMedia />
            </DashboardLayout>
          } />
          <Route path="/dashboard/advertising" element={
            <DashboardLayout>
              <Advertising />
            </DashboardLayout>
          } />
          <Route path="/dashboard/seo" element={
            <DashboardLayout>
              <BasicPage title="SEO" />
            </DashboardLayout>
          } />
          <Route path="/dashboard/assets" element={
            <DashboardLayout>
              <Assets />
            </DashboardLayout>
          } />
          <Route path="/dashboard/brands" element={
            <DashboardLayout>
              <Brands />
            </DashboardLayout>
          } />
          <Route path="/dashboard/brands/add" element={
            <DashboardLayout>
              <AddBrand />
            </DashboardLayout>
          } />
          <Route path="/dashboard/platform" element={
            <DashboardLayout>
              <Platform />
            </DashboardLayout>
          } />
          <Route path="/dashboard/website" element={
            <DashboardLayout>
              <BasicPage title="Website/App" />
            </DashboardLayout>
          } />
          <Route path="/dashboard/analytics" element={
            <DashboardLayout>
              <Analytics />
            </DashboardLayout>
          } />
          <Route path="/dashboard/credits" element={
            <DashboardLayout>
              <Credits />
            </DashboardLayout>
          } />
          <Route path="/dashboard/helix-desk" element={
            <DashboardLayout>
              <HelixDesk />
            </DashboardLayout>
          } />
          <Route path="/dashboard/virtual-staff" element={
            <DashboardLayout>
              <VirtualStaff />
            </DashboardLayout>
          } />
          <Route path="/dashboard/upgrade" element={
            <DashboardLayout>
              <Upgrade />
            </DashboardLayout>
          } />
          <Route path="/dashboard/support" element={
            <DashboardLayout>
              <BasicPage title="Support" />
            </DashboardLayout>
          } />
          <Route path="/dashboard/settings" element={
            <DashboardLayout>
              <BasicPage title="Settings" />
            </DashboardLayout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
