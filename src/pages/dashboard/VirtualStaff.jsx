import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  PhoneIcon, 
  VideoCameraIcon, 
  EllipsisVerticalIcon,
  PaperClipIcon,
  PhotoIcon,
  VideoCameraSlashIcon,
  DocumentIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline';

function VirtualStaff() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('my-staff');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [attachmentType, setAttachmentType] = useState(null);
  const [files, setFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'my-staff', name: 'My Staff' },
    { id: 'hire-new', name: 'Hire New' },
  ];

  const staffProfiles = [
    {
      id: 1,
      name: 'Samantha',
      role: 'UI/UX Designer',
      ratings: 4.5,
      totalRatings: 245,
      education: "Master's Degree",
      workType: 'Remote Work',
      experience: 'UI Designer (2+ yrs)',
      partTime: '₹3,100/monthly (8 hours)',
      fullTime: '₹8,000/monthly (4 hours)',
      languages: ['English', 'Kanada', 'Hindi']
    },
    {
      id: 2,
      name: 'Michael',
      role: 'Frontend Developer',
      ratings: 4.8,
      totalRatings: 189,
      education: "Bachelor's Degree",
      workType: 'Remote Work',
      experience: 'React Developer (3+ yrs)',
      partTime: '₹3,500/monthly (8 hours)',
      fullTime: '₹9,000/monthly (4 hours)',
      languages: ['English', 'Spanish']
    },
    {
      id: 3,
      name: 'Sarah',
      role: 'Content Writer',
      ratings: 4.6,
      totalRatings: 156,
      education: "Master's Degree",
      workType: 'Remote Work',
      experience: 'Content Writing (4+ yrs)',
      partTime: '₹2,800/monthly (8 hours)',
      fullTime: '₹7,500/monthly (4 hours)',
      languages: ['English', 'French']
    },
    {
      id: 4,
      name: 'David',
      role: 'Digital Marketer',
      ratings: 4.7,
      totalRatings: 203,
      education: "Bachelor's Degree",
      workType: 'Remote Work',
      experience: 'Digital Marketing (3+ yrs)',
      partTime: '₹3,300/monthly (8 hours)',
      fullTime: '₹8,500/monthly (4 hours)',
      languages: ['English', 'German']
    },
    {
      id: 5,
      name: 'Emily',
      role: 'Graphic Designer',
      ratings: 4.9,
      totalRatings: 178,
      education: "Bachelor's Degree",
      workType: 'Remote Work',
      experience: 'Graphic Design (5+ yrs)',
      partTime: '₹3,200/monthly (8 hours)',
      fullTime: '₹8,200/monthly (4 hours)',
      languages: ['English', 'Italian']
    }
  ];

  const activeChats = [
    { id: 1, name: 'Rashid Khan', message: 'Hey!! you are there? 😊', time: '11:12PM', online: true },
    { id: 2, name: 'Jamison Jen', message: 'Typing...', time: '06:52AM', online: true },
    { id: 3, name: 'Andy Max', message: 'Great! I am happy to here thi...', time: '10:15AM', online: true },
    { id: 4, name: 'Kerina Cherish', message: 'Looking forward about the m...', time: '03:15PM', online: true },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim() || files.length > 0) {
      const newMessage = {
        id: Date.now(),
        text: message,
        files: files,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setFiles([]);
      setAttachmentType(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachment = (type) => {
    setAttachmentType(type);
    setShowAttachmentMenu(false);
    
    const acceptedTypes = {
      image: 'image/*',
      video: 'video/*',
      file: '.pdf,.doc,.docx'
    };
    
    if (fileInputRef.current) {
      fileInputRef.current.accept = acceptedTypes[type];
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = selectedFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      fileType: file.type.split('/')[0],
      preview: URL.createObjectURL(file)
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].preview);
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const renderFilePreview = (file, index) => {
    if (file.fileType === 'image') {
      return (
        <div key={file.id} className="relative">
          <img src={file.preview} alt="Preview" className="rounded-lg max-h-32 w-auto" />
          <button
            onClick={() => removeFile(index)}
            className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      );
    } else if (file.fileType === 'video') {
      return (
        <div key={file.id} className="relative">
          <video src={file.preview} controls className="rounded-lg max-h-32 w-auto" />
          <button
            onClick={() => removeFile(index)}
            className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      );
    } else {
      return (
        <div key={file.id} className="relative">
          <div className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg">
            <DocumentIcon className="w-5 h-5" />
            <span className="truncate">{file.file.name}</span>
          </div>
          <button
            onClick={() => removeFile(index)}
            className="absolute -top-2 -right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      );
    }
  };

  const renderContent = () => {
    if (activeTab === 'hire-new') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffProfiles.map((profile) => (
            <div
              key={profile.id}
              className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <h3 className="font-medium">{profile.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {profile.role}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(profile.ratings)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">
                  ({profile.totalRatings} Ratings)
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                 
                  <span className="text-sm text-purple-500">{profile.education}</span>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <span className="text-sm text-green-500">{profile.workType}</span>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <span className="text-sm text-blue-500">{profile.experience}</span>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'} mb-4`}>
                <div className="mb-2">
                  <div className="text-sm text-gray-400">Part time:</div>
                  <div>{profile.partTime}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Full time:</div>
                  <div>{profile.fullTime}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Language:</div>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Hire Part-time
                </button>
                <button className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Hire Full-time
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex gap-6">
        <div className="w-80">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-4`}>
            <h2 className="text-sm font-medium mb-4 uppercase text-gray-400">Active Chats</h2>
            <div className="space-y-2">
              {activeChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer ${
                    chat.id === 4 ? 'bg-blue-500/10' : isDark ? 'hover:bg-[#1A1A1A]' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#242424]"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium truncate">{chat.name}</h3>
                        <span className="text-xs text-gray-400">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{chat.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} overflow-hidden`}>
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#242424]"></div>
                </div>
                <div>
                  <h3 className="font-medium">Kerina Cherish</h3>
                  <p className="text-sm text-gray-400">online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <PhoneIcon className="w-5 h-5" />
                </button>
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <VideoCameraIcon className="w-5 h-5" />
                </button>
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <EllipsisVerticalIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="h-[calc(100vh-400px)] overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${msg.sender === 'You' ? 'bg-blue-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-3`}>
                      {msg.files && msg.files.length > 0 && (
                        <div className="mb-2">
                          {msg.files.map((file, index) => (
                            <div key={file.id} className="mb-2">
                              {file.fileType === 'image' ? (
                                <img src={file.preview} alt="Attachment" className="rounded-lg max-w-full" />
                              ) : file.fileType === 'video' ? (
                                <video src={file.preview} controls className="rounded-lg max-w-full" />
                              ) : (
                                <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg">
                                  <DocumentIcon className="w-5 h-5" />
                                  <span>{file.file.name}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {msg.text && <p>{msg.text}</p>}
                      <div className={`text-xs mt-1 ${msg.sender === 'You' ? 'text-white/70' : 'text-gray-400'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              {files.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {files.map((file, index) => renderFilePreview(file, index))}
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                multiple
              />

              <div className="flex items-end space-x-2">
                <div className="relative">
                  <button
                    onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                    className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    <PaperClipIcon className="w-5 h-5" />
                  </button>
                  {showAttachmentMenu && (
                    <div className={`absolute bottom-full left-0 mb-2 w-48 rounded-lg shadow-lg ${
                      isDark ? 'bg-gray-700' : 'bg-white'
                    }`}>
                      <button
                        onClick={() => handleAttachment('image')}
                        className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        <PhotoIcon className="w-5 h-5" />
                        <span>Image</span>
                      </button>
                      <button
                        onClick={() => handleAttachment('video')}
                        className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        <VideoCameraSlashIcon className="w-5 h-5" />
                        <span>Video</span>
                      </button>
                      <button
                        onClick={() => handleAttachment('file')}
                        className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        <DocumentIcon className="w-5 h-5" />
                        <span>File</span>
                      </button>
                    </div>
                  )}
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 resize-none rounded-lg px-4 py-2 ${
                    isDark 
                      ? 'bg-[#1A1A1A] text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  } focus:outline-none`}
                  rows="1"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">HeyLix</span>
            <span className="text-gray-400">/</span>
            <span>Virtual Staff</span>
          </div>
        </div>
      </div>

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

      {renderContent()}
    </div>
  );
}

export default VirtualStaff;
