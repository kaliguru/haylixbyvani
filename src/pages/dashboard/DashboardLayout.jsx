import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import screenfull from 'screenfull';
import { useTheme } from '../../context/ThemeContext';
import {
  HomeIcon,
  BeakerIcon,
  ShareIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowUpCircleIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  Bars3Icon,
  SunIcon,
  MoonIcon,
  ShoppingCartIcon,
  BellIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

const sidebarItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { name: 'AI Tools', icon: BeakerIcon, path: '/dashboard/ai-tools' },
  { name: 'Social Media', icon: ShareIcon, path: '/dashboard/social-media' },
  { name: 'Advertising', icon: MegaphoneIcon, path: '/dashboard/advertising' },
  { name: 'SEO', icon: MagnifyingGlassIcon, path: '/dashboard/seo' },
  { name: 'Assets', icon: PhotoIcon, path: '/dashboard/assets' },
  { name: 'Brands', icon: BuildingStorefrontIcon, path: '/dashboard/brands' },
  { name: 'Platform', icon: CubeIcon, path: '/dashboard/platform' },
  { name: 'Website/App', icon: GlobeAltIcon, path: '/dashboard/website' },
  { name: 'Analytics', icon: ChartBarIcon, path: '/dashboard/analytics' },
  { name: 'Credits', icon: CreditCardIcon, path: '/dashboard/credits' },
  { name: 'Helix Desk', icon: ChatBubbleLeftRightIcon, path: '/dashboard/helix-desk' },
  { name: 'Virtual Staff', icon: UserGroupIcon, path: '/dashboard/virtual-staff' },
  { name: 'Upgrade', icon: ArrowUpCircleIcon, path: '/dashboard/upgrade' },
  { name: 'Support', icon: QuestionMarkCircleIcon, path: '/dashboard/support' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/dashboard/settings' },
];

function DashboardLayout({ children }) {
  const location = useLocation();
  const { isDark, setIsDark } = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} ${isDark ? 'bg-[#242424]' : 'bg-white'} transition-all duration-300`}>
        <div className={`p-4 flex ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}`}>
          <img 
            src={isSidebarCollapsed ? "/ai_round.png" : (isDark ? "/Heylix_AI_white.png" : "/Heylix_AI_black.png")} 
            alt="Heylix AI" 
            className={`${isSidebarCollapsed ? 'h-10 w-10' : 'h-8'} object-contain`}
          />
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#4150f7] to-[#ff4193] text-white'
                    : `${isDark ? 'text-gray-400' : 'text-gray-600'} hover:bg-gradient-to-r hover:from-[#4150f7]/20 hover:to-[#ff4193]/20 hover:text-white`
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {!isSidebarCollapsed && item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className={`${isDark ? 'bg-[#242424] border-gray-700' : 'bg-white border-gray-200'} border-b`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything here ..."
                  className={`w-80 pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#4150f7] ${
                    isDark 
                      ? 'bg-[#1A1A1A] text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <MagnifyingGlassIcon className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'} absolute right-3 top-1/2 transform -translate-y-1/2`} />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                <LanguageIcon className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
              <button className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} relative`}>
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} relative`}>
                <BellIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </button>
              <button
                onClick={toggleFullscreen}
                className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isFullscreen ? (
                  <ArrowsPointingInIcon className="w-6 h-6" />
                ) : (
                  <ArrowsPointingOutIcon className="w-6 h-6" />
                )}
              </button>
              <button className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full w-8 h-8 flex items-center justify-center`}>
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              <button className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                <Cog6ToothIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
