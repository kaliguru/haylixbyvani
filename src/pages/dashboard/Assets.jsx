import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDownIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import ImageViewer from '../../components/ImageViewer';
import AllFiles from '../../components/assets/AllFiles';
import UploadFiles from '../../components/assets/UploadFiles';
import AIGenerate from '../../components/assets/AIGenerate';
import Heylix from '../../components/assets/Heylix';

function Assets() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'upload', name: 'Upload' },
    { id: 'ai-generate', name: 'AI Generate' },
    { id: 'heylix', name: 'Heylix' },
  ];

  const storageDetails = {
    total: '89.47GB',
    used: '68.12GB',
    free: '21.35GB',
    categories: [
      { name: 'Images', files: '3,145 files', used: '45GB', color: 'blue' },
      { name: 'Videos', files: '568 files', used: '66GB', color: 'pink' },
    ]
  };

  const renderActiveTab = () => {
    const props = { onImageView: (image) => setSelectedImage(image) };
    
    switch (activeTab) {
      case 'upload':
        return <UploadFiles {...props} />;
      case 'ai-generate':
        return <AIGenerate {...props} />;
      case 'heylix':
        return <Heylix {...props} />;
      default:
        return <AllFiles {...props} />;
    }
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">HeyLix</span>
            <span className="text-gray-400">/</span>
            <span>Assets</span>
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
        {/* Files List */}
        <div className="flex-1">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-4">
              <div className="relative">
                <button
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span>Sort By</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {isSortDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                    isDark ? 'bg-gray-700' : 'bg-white'
                  } z-50`}>
                    <button
                      onClick={() => {
                        setSortBy('name');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                        sortBy === 'name' ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      Name
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('date');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                        sortBy === 'date' ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      Date
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('size');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white ${
                        sortBy === 'size' ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      Size
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Active Tab Content */}
            {renderActiveTab()}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Prev
              </span>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded bg-blue-500 text-white">1</span>
                <span className="px-3 py-1 rounded">2</span>
              </div>
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                next
              </span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80">
          {/* Upload Section - Only show when upload tab is active */}
          {activeTab === 'upload' && (
            <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 mb-6`}>
              <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
              <div className={`border-2 border-dashed ${isDark ? 'border-gray-700' : 'border-gray-300'} rounded-lg p-6 text-center`}>
                <div className="mb-4">
                  <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-gray-400" />
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  Drag & Drop your files or Browse
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Upload
                </button>
              </div>
            </div>
          )}

          {/* Storage Details */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Storage Details</h2>
              <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                Upgrade
              </button>
            </div>
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>All Folders</span>
                <span>{storageDetails.used} Used</span>
              </div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {storageDetails.free} free space
              </div>
            </div>
            {storageDetails.categories.map((category, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded bg-${category.color}-500/10 flex items-center justify-center`}>
                      <span className={`text-${category.color}-500`}>
                        {category.name === 'Images' ? '🖼️' : '🎥'}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {category.files}
                      </div>
                    </div>
                  </div>
                  <span className={`text-${category.color}-500`}>{category.used}</span>
                </div>
                <div className={`h-2 rounded-full bg-${category.color}-500/20`}>
                  <div
                    className={`h-full rounded-full bg-${category.color}-500`}
                    style={{ width: '70%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
}

export default Assets;
