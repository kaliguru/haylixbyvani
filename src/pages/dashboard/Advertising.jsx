import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  MegaphoneIcon, 
  RocketLaunchIcon, 
  ChatBubbleLeftRightIcon, 
  HeartIcon, 
  DevicePhoneMobileIcon, 
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  UserGroupIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
  PlayCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

function Advertising() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('meta');

  const tabs = [
    { id: 'meta', name: 'Meta Ads' },
    { id: 'google', name: 'Google Ads' },
    { id: 'active', name: 'Active Ads' },
  ];

  const metaGoals = [
    {
      id: 'awareness',
      title: 'Awareness',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: MegaphoneIcon
    },
    {
      id: 'traffic',
      title: 'Drive Traffic',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: RocketLaunchIcon
    },
    {
      id: 'message',
      title: 'Get Message',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: 'leads',
      title: 'Generate Leads',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: RocketLaunchIcon
    },
    {
      id: 'calls',
      title: 'Get Calls',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: 'likes',
      title: 'Post/Video Likes',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: HeartIcon
    },
    {
      id: 'app',
      title: 'Promote App',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: DevicePhoneMobileIcon
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      description: 'defre trew dfijl defre trew dfijldefre trew dfijldefre trew dfijl',
      icon: ChatBubbleOvalLeftEllipsisIcon
    }
  ];

  const googleGoals = [
    {
      id: 'website-traffic',
      title: 'Website Traffic',
      description: 'Website Traffic details...',
      icon: GlobeAltIcon
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description: 'Lead Generation details...',
      icon: UserGroupIcon
    },
    {
      id: 'google-map',
      title: 'Google Map Ad',
      description: 'App Promotion details...',
      icon: MapPinIcon
    },
    {
      id: 'app-promotion',
      title: 'App Promotion',
      description: 'App Promotion details...',
      icon: BuildingStorefrontIcon
    },
    {
      id: 'youtube-ads',
      title: 'YouTube Ads',
      description: 'Promote your videos and channel on YouTube',
      icon: PlayCircleIcon
    },
    {
      id: 'call-ads',
      title: 'Call Ads',
      description: 'Get direct phone calls from potential customers',
      icon: PhoneIcon
    }
  ];

  const currentGoals = activeTab === 'meta' ? metaGoals : googleGoals;

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">Assets</span>
            <span className="text-gray-400">/</span>
            <span>All</span>
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
        {/* Goals Grid */}
        <div className="flex-1">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            <h2 className="text-xl font-semibold mb-6">
              {activeTab === 'meta' ? 'Select your Goal' : 'Choose your Goal'}
            </h2>
            <div className={`grid grid-cols-1 ${activeTab === 'meta' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
              {currentGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'} p-6 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all`}
                >
                  <div className="mb-4">
                    <goal.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{goal.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {goal.description}
                  </p>
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
          {/* Balance Card */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 mb-6`}>
            <h2 className="text-lg font-semibold mb-4">Total AD Balance</h2>
            <div className="text-3xl font-bold mb-6">₹10,000</div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Add Fund
              </button>
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Transactions
              </button>
            </div>
          </div>

          {/* Hire Card */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            <div className="aspect-video rounded-lg bg-gray-700 mb-4"></div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertising;
