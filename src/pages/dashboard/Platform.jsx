import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

function Platform() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('facebook');

  const platformAccounts = {
    facebook: [
      { id: 1, name: 'Tech Solutions Inc.', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Page', accountType: 'Company', followers: '25.6K' },
      { id: 2, name: 'Global Marketing Hub', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Page', accountType: 'Agency', followers: '42.1K' },
      { id: 3, name: 'Digital Dynamics Ltd', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Page', accountType: 'Company', followers: '18.3K' },
    ],
    instagram: [
      { id: 1, name: 'Fashion Forward Co.', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Account', accountType: 'Brand', followers: '56.8K' },
      { id: 2, name: 'Lifestyle Luxe', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Account', accountType: 'Company', followers: '89.2K' },
      { id: 3, name: 'Creative Visuals Studio', status: 'Active', connectionStatus: 'Connected', connectionType: 'Business Account', accountType: 'Agency', followers: '34.5K' },
    ],
    linkedin: [
      { id: 1, name: 'Enterprise Solutions Corp', status: 'Active', connectionStatus: 'Connected', connectionType: 'Company Page', accountType: 'Enterprise', followers: '15.2K' },
      { id: 2, name: 'B2B Marketing Pro', status: 'Active', connectionStatus: 'Connected', connectionType: 'Company Page', accountType: 'Agency', followers: '28.7K' },
      { id: 3, name: 'Tech Innovations Ltd', status: 'Active', connectionStatus: 'Connected', connectionType: 'Company Page', accountType: 'Company', followers: '42.9K' },
    ],
    youtube: [
      { id: 1, name: 'Tech Review Channel', status: 'Active', connectionStatus: 'Connected', connectionType: 'Brand Account', accountType: 'Content Creator', subscribers: '128K' },
      { id: 2, name: 'Educational Hub', status: 'Active', connectionStatus: 'Connected', connectionType: 'Brand Account', accountType: 'Education', subscribers: '256K' },
      { id: 3, name: 'Corporate Training Pro', status: 'Active', connectionStatus: 'Connected', connectionType: 'Brand Account', accountType: 'Business', subscribers: '75.4K' },
    ],
  };

  const tabs = [
    { id: 'facebook', name: 'Facebook', icon: '/icons/facebook.png' },
    { id: 'instagram', name: 'Instagram', icon: '/icons/instagram.png' },
    { id: 'linkedin', name: 'LinkedIn', icon: '/icons/linkedin.png' },
    { id: 'youtube', name: 'YouTube', icon: '/icons/youtube.png' },
  ];

  const getAccountTypeColor = (platform) => {
    const colors = {
      facebook: 'blue',
      instagram: 'pink',
      linkedin: 'blue',
      youtube: 'red',
    };
    return colors[platform] || 'blue';
  };

  const getCurrentAccounts = () => platformAccounts[activeTab] || [];

  const getAddButtonStyles = (platform) => {
    if (platform === 'youtube') {
      return `flex items-center space-x-2 px-4 py-2 ${isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg transition-colors`;
    }
    return `flex items-center space-x-2 px-4 py-2 bg-${getAccountTypeColor(platform)}-500 text-white rounded-lg hover:opacity-90 transition-opacity`;
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Platform</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span>Platform</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`border-b ${isDark ? 'border-gray-700/50' : 'border-gray-200'} mb-6`}>
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-4 px-4 relative transition-all duration-200 ${
                activeTab === tab.id
                  ? `text-${getAccountTypeColor(tab.id)}-500`
                  : `${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-300`
              }`}
            >
              <img src={tab.icon} alt={tab.name} className="w-5 h-5" />
              <span className="font-medium">{tab.name}</span>
              {activeTab === tab.id && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-${getAccountTypeColor(tab.id)}-500 rounded-full`}></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">
            {activeTab === 'facebook' && 'Connected Facebook Pages'}
            {activeTab === 'instagram' && 'Connected Instagram Accounts'}
            {activeTab === 'linkedin' && 'Connected LinkedIn Pages'}
            {activeTab === 'youtube' && 'Connected YouTube Channels'}
          </h2>
          <button className={getAddButtonStyles(activeTab)}>
            <PlusIcon className="w-5 h-5" />
            <span>
              {activeTab === 'facebook' && 'Add Facebook Page'}
              {activeTab === 'instagram' && 'Add Instagram Account'}
              {activeTab === 'linkedin' && 'Add LinkedIn Page'}
              {activeTab === 'youtube' && 'Add YouTube Channel'}
            </span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <th className="pb-4">#</th>
                <th className="pb-4">Business Info</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Connection Status</th>
                <th className="pb-4">Connection Type</th>
                <th className="pb-4">Account Type</th>
                <th className="pb-4">
                  {activeTab === 'youtube' ? 'Subscribers' : 'Followers'}
                </th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-gray-700/50' : 'divide-gray-200'}`}>
              {getCurrentAccounts().map((account) => (
                <tr key={account.id} className="text-sm">
                  <td className="py-4">{account.id}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-xs font-medium`}>
                        {account.name.split(' ').map(word => word[0]).join('')}
                      </div>
                      <span>{account.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">
                      {account.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs">
                      {account.connectionStatus}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 bg-${getAccountTypeColor(activeTab)}-500/10 text-${getAccountTypeColor(activeTab)}-500 rounded-full text-xs`}>
                      {account.connectionType}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">
                      {account.accountType}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`text-${getAccountTypeColor(activeTab)}-500 font-medium`}>
                      {activeTab === 'youtube' ? account.subscribers : account.followers}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded bg-gray-500/10 text-gray-400 hover:text-gray-300 transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded bg-blue-500/10 text-blue-500 hover:text-blue-400 transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded bg-red-500/10 text-red-500 hover:text-red-400 transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-400">
            Showing {getCurrentAccounts().length} Entries
          </div>
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-1 rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}>
              Prev
            </button>
            <button className={`px-3 py-1 rounded bg-${getAccountTypeColor(activeTab)}-500 text-white`}>
              1
            </button>
            <button className={`px-3 py-1 rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
