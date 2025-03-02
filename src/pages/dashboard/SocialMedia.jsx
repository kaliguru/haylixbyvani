import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  CalendarIcon, 
  ChartBarIcon, 
  SparklesIcon,
  PlusIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

function SocialMedia() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('calendar');

  const tabs = [
    { id: 'calendar', name: 'Calendar', icon: CalendarIcon },
    { id: 'insights', name: 'Post Insights', icon: ChartBarIcon },
  ];

  // Dummy data for calendar events
  const calendarEvents = {
    2: { title: 'Spruko Meetup', type: 'meeting', color: 'purple' },
    3: { title: 'Harewari Birthday', type: 'birthday', color: 'blue' },
    4: { title: 'Festival Day', type: 'festival', color: 'red' },
    5: { title: 'Music Festival', type: 'timeline', color: 'green', endDay: 8 },
    7: { title: 'My Rest Day', type: 'timeline', color: 'blue', endDay: 8 },
    12: { title: 'Lifestyle Conference', type: 'event', color: 'blue' },
    16: { title: 'Design Review', type: 'meeting', color: 'blue' },
    18: { title: 'Memorial Day', type: 'holiday', color: 'red' },
    20: { title: 'Team Weekly Brownbag', type: 'meeting', color: 'yellow' },
    23: { title: 'Attend Lea\'s Wedding', type: 'timeline', color: 'green', endDay: 25 },
    25: { title: 'Diwali', type: 'festival', color: 'red' },
    27: { title: 'Burnysims Birthday', type: 'birthday', color: 'blue' },
    28: { title: 'My Rest Day', type: 'timeline', color: 'blue', endDay: 29 }
  };

  // Dummy data for post insights
  const postInsights = [
    {
      id: 1,
      platform: 'facebook',
      type: 'image',
      status: 'Posted',
      date: '02 Dec 2024 06:30 PM',
      thumbnail: '/login-bg.jpg',
      metrics: {
        reactions: 10,
        comments: 12,
        shares: 10,
        trend: 'up',
        percentage: '23%'
      }
    },
    {
      id: 2,
      platform: 'instagram',
      type: 'image',
      status: 'Posted',
      date: '02 Dec 2024 06:30 PM',
      thumbnail: '/login-bg.jpg',
      metrics: {
        reactions: 55,
        comments: 3,
        shares: 5,
        trend: 'up',
        percentage: '45%'
      }
    },
    {
      id: 3,
      platform: 'linkedin',
      type: 'reel',
      status: 'Posted',
      date: '02 Dec 2024 06:30 PM',
      thumbnail: '/login-bg.jpg',
      metrics: {
        reactions: 'Not Supported',
        comments: 'Not Supported',
        shares: 8,
        trend: 'down',
        percentage: '12%'
      }
    },
    {
      id: 4,
      platform: 'instagram',
      type: 'reel',
      status: 'Scheduled',
      date: '10 Dec 2024 04:30 PM',
      thumbnail: '/login-bg.jpg',
      metrics: {
        reactions: 0,
        comments: 0,
        shares: 0,
        trend: 'neutral',
        percentage: '0%'
      }
    }
  ];

  const handleCreatePost = () => {
    navigate('/dashboard/create');
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Social Media</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span>Social Media</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={`flex gap-6 ${activeTab === 'insights' ? 'block' : 'flex'}`}>
        {/* Left Content Area */}
        <div className={activeTab === 'insights' ? 'w-full' : 'flex-1'}>
          {/* Tabs */}
          <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-6`}>
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 pb-4 px-4 relative transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-500'
                      : `${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-300`
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            {activeTab === 'calendar' ? (
              <div>
                {/* Calendar Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      Today
                    </button>
                  </div>
                  <h2 className="text-xl font-semibold">February 2025</h2>
                  <div className="flex items-center space-x-2">
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      Month
                    </button>
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      Week
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-4">
                  {/* Calendar header */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Previous month days */}
                  {[28, 29, 30, 31].map((day) => (
                    <div
                      key={`prev-${day}`}
                      className={`aspect-square rounded-lg ${
                        isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'
                      } p-2 opacity-50`}
                    >
                      <span className="text-sm">{day}</span>
                    </div>
                  ))}

                  {/* Current month days */}
                  {Array.from({ length: 28 }).map((_, index) => {
                    const day = index + 1;
                    const event = calendarEvents[day];
                    
                    return (
                      <div
                        key={day}
                        className={`aspect-square rounded-lg ${
                          isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'
                        } p-2 cursor-pointer hover:bg-blue-500/10 transition-colors relative`}
                      >
                        <span className="text-sm">{day}</span>
                        {event && (
                          <div 
                            className={`absolute bottom-2 left-2 right-2 p-1 rounded text-xs bg-${event.color}-500/20 text-${event.color}-500 truncate`}
                          >
                            {event.title}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                {/* Post Insights Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      All Posts
                    </button>
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      Published
                    </button>
                    <button className={`px-3 py-1 text-sm rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      Scheduled
                    </button>
                  </div>
                  <button
                    onClick={handleCreatePost}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <PlusIcon className="w-5 h-5" />
                    <span>Create Post</span>
                  </button>
                </div>

                {/* Posts Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <th className="pb-4">Platform</th>
                        <th className="pb-4">Content</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Published on</th>
                        <th className="pb-4">Reaction</th>
                        <th className="pb-4">Comments</th>
                        <th className="pb-4">Shares</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                      {postInsights.map((post) => (
                        <tr key={post.id} className="text-sm">
                          <td className="py-4">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                              <img 
                                src={`/icons/${post.platform}.png`}
                                alt={post.platform}
                                className="w-5 h-5"
                              />
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 rounded overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                <img 
                                  src={post.thumbnail} 
                                  alt="" 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium">{post.type}</div>
                                <div className="text-gray-400">Make Instagram post...</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              post.status === 'Posted' 
                                ? 'bg-green-500/10 text-green-500'
                                : 'bg-blue-500/10 text-blue-500'
                            }`}>
                              {post.status}
                            </span>
                          </td>
                          <td className="py-4">{post.date}</td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <HeartIcon className="w-5 h-5 text-pink-500" />
                              <span>{post.metrics.reactions}</span>
                              {post.metrics.trend !== 'neutral' && (
                                <div className={`flex items-center ${
                                  post.metrics.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                  {post.metrics.trend === 'up' ? (
                                    <ArrowUpIcon className="w-4 h-4" />
                                  ) : (
                                    <ArrowDownIcon className="w-4 h-4" />
                                  )}
                                  <span className="text-xs">{post.metrics.percentage}</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <ChatBubbleLeftIcon className="w-5 h-5 text-blue-500" />
                              <span>{post.metrics.comments}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <ShareIcon className="w-5 h-5 text-green-500" />
                              <span>{post.metrics.shares}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Only show when calendar tab is active */}
        {activeTab === 'calendar' && (
          <div className="w-80">
            {/* Create New Event Button */}
            <button 
              onClick={handleCreatePost}
              className="w-full mb-6 bg-blue-500 text-white rounded-lg py-2.5 px-4 flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Create New Post</span>
            </button>

            {/* Upcoming Events */}
            <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-4 mb-6`}>
              <h2 className="font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-3">
                {[
                  { id: 1, title: 'Product Launch', date: 'Feb 15, 2024', type: 'event' },
                  { id: 2, title: 'Social Media Campaign', date: 'Feb 18, 2024', type: 'campaign' },
                  { id: 3, title: 'Team Meeting', date: 'Feb 20, 2024', type: 'meeting' },
                ].map((event) => (
                  <div
                    key={event.id}
                    className={`p-3 rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        event.type === 'event' 
                          ? 'bg-blue-500/10 text-blue-500'
                          : event.type === 'campaign'
                          ? 'bg-purple-500/10 text-purple-500'
                          : 'bg-green-500/10 text-green-500'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Ideas */}
            <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-4`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">AI Ideas</h2>
                <button className="text-blue-500 hover:text-blue-400 transition-colors">
                  <SparklesIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, title: 'Create engaging video content about new features', platform: 'All Platforms' },
                  { id: 2, title: 'Share customer success stories', platform: 'LinkedIn' },
                  { id: 3, title: 'Post behind-the-scenes content', platform: 'Instagram' },
                  { id: 4, title: 'Start a weekly tech tip series', platform: 'Facebook' },
                  { id: 5, title: 'Create tutorial videos', platform: 'YouTube' },
                ].map((idea) => (
                  <div
                    key={idea.id}
                    className={`p-3 rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'}`}
                  >
                    <h3 className="font-medium text-sm">{idea.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{idea.platform}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialMedia;
