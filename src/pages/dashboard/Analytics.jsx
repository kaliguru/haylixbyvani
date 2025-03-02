import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import AnalyticsChart from '../../components/analytics/AnalyticsChart';
import VisitChart from '../../components/analytics/charts/VisitChart';
import GroupChart from '../../components/analytics/charts/GroupChart';
import GenderChart from '../../components/analytics/charts/GenderChart';
import CountriesChart from '../../components/analytics/charts/CountriesChart';
import PostsTable from '../../components/analytics/charts/PostsTable';

function Analytics() {
  const { isDark } = useTheme();
  const [selectedPlatform, setSelectedPlatform] = useState('facebook');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('This week');
  const [isTimeframeDropdownOpen, setIsTimeframeDropdownOpen] = useState(false);

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '/icons/facebook.png' },
    { id: 'instagram', name: 'Instagram', icon: '/icons/instagram.png' },
    { id: 'linkedin', name: 'LinkedIn', icon: '/icons/linkedin.png' },
    { id: 'youtube', name: 'YouTube', icon: '/icons/youtube.png' },
    { id: 'meta-ads', name: 'MetaAd', icon: '/analytics/meta-ads.png' },
    { id: 'google-ads', name: 'GoogleAd', icon: '/analytics/google-ads.png' },
  ];

  const brands = ['All Brands', 'Brand 1', 'Brand 2', 'Brand 3'];
  const timeframes = ['This week', 'Yesterday', 'Last week', 'Last month', 'Last year'];

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">HeyLix</span>
            <span className="text-gray-400">/</span>
            <span>Analytics</span>
          </div>
          <h1 className="text-2xl font-semibold mt-2">Analytics</h1>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Review performance results and more
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          {/* Brand Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                isDark ? 'bg-[#242424] hover:bg-[#2a2a2a]' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span>{selectedBrand}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {isBrandDropdownOpen && (
              <div className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg ${
                isDark ? 'bg-[#242424]' : 'bg-white'
              } z-50`}>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setIsBrandDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                      selectedBrand === brand ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Platform Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                isDark ? 'bg-[#242424] hover:bg-[#2a2a2a]' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img 
                src={platforms.find(p => p.id === selectedPlatform)?.icon} 
                alt={selectedPlatform}
                className="w-5 h-5"
              />
              <span>{platforms.find(p => p.id === selectedPlatform)?.name}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg ${
                isDark ? 'bg-[#242424]' : 'bg-white'
              } z-50`}>
                {platforms.map(platform => (
                  <button
                    key={platform.id}
                    onClick={() => {
                      setSelectedPlatform(platform.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                      selectedPlatform === platform.id ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <img src={platform.icon} alt={platform.name} className="w-5 h-5" />
                      <span>{platform.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Timeframe Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsTimeframeDropdownOpen(!isTimeframeDropdownOpen)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                isDark ? 'bg-[#242424] hover:bg-[#2a2a2a]' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span>{selectedTimeframe}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {isTimeframeDropdownOpen && (
              <div className={`absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg ${
                isDark ? 'bg-[#242424]' : 'bg-white'
              } z-50`}>
                {timeframes.map(timeframe => (
                  <button
                    key={timeframe}
                    onClick={() => {
                      setSelectedTimeframe(timeframe);
                      setIsTimeframeDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                      selectedTimeframe === timeframe ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart type="pageView" platform={selectedPlatform} />
        <AnalyticsChart type="interaction" platform={selectedPlatform} />
        <VisitChart />
        <GroupChart />
        <GenderChart />
        <CountriesChart />
      </div>

      {/* Posts Table */}
      <div className="mt-6">
        <PostsTable platform={selectedPlatform} />
      </div>
    </div>
  );
}

export default Analytics;
