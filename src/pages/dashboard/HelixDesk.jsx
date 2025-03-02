import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

function HelixDesk() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('create-image');

  const tabs = [
    { id: 'create-image', name: 'Create Image' },
    { id: 'create-video', name: 'Create Video' },
    { id: 'job-status', name: 'JobStatus' },
  ];

  const imageTypes = [
    {
      title: 'Social Media',
      sizes: [
        'Square - 1080x1080',
        'Portrait - 1080x1920'
      ]
    },
    {
      title: 'Meta Ads',
      sizes: [
        'Square - 1080x1080',
        'Portrait - 1080x1920'
      ]
    },
    {
      title: 'Google Image Ad',
      sizes: [
        'Horizontal,Vertical',
        'Square'
      ]
    },
    {
      title: 'LinkedIn',
      sizes: [
        'Square - 1080x1080',
        'Portrait - 1080x1920'
      ]
    }
  ];

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">HeyLix</span>
            <span className="text-gray-400">/</span>
            <span>Content Creation Service</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-pink-500 text-white'
                : `${isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Image Types Grid */}
        <div className="flex-1">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageTypes.map((type, index) => (
                <div
                  key={index}
                  className={`rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'} p-6`}
                >
                  <div className="aspect-video rounded-lg bg-gray-700 mb-4"></div>
                  <h3 className="text-lg font-medium mb-2">{type.title}</h3>
                  {type.sizes.map((size, sizeIndex) => (
                    <p key={sizeIndex} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {size}
                    </p>
                  ))}
                  <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 text-sm">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80">
          {/* Notice Card */}
          <div className={`rounded-lg bg-blue-500 p-6 text-white`}>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              Notice
              <span className="ml-2">🔔</span>
            </h2>
            <p className="text-sm mb-2">
              we need min 24 hours to create
            </p>
            <p className="text-sm">
              Changes Can be done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelixDesk;
