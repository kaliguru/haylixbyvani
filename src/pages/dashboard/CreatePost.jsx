import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  MicrophoneIcon, 
  StopIcon, 
  SparklesIcon,
  PhotoIcon,
  HeartIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  HandThumbDownIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

const socialPlatforms = [
  { id: 'facebook', name: 'Facebook', icon: '/icons/facebook.png' },
  { id: 'instagram', name: 'Instagram', icon: '/icons/instagram.png' },
  { id: 'linkedin', name: 'LinkedIn', icon: '/icons/linkedin.png' },
  { id: 'youtube', name: 'YouTube', icon: '/icons/youtube.png' },
];

function CreatePost() {
  const { isDark } = useTheme();
  const [files, setFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [thumbnailFiles, setThumbnailFiles] = useState([]);
  const [activePlatform, setActivePlatform] = useState('facebook');
  const [isRecording, setIsRecording] = useState(false);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  const [crossPostTo, setCrossPostTo] = useState({
    facebook: false,
    instagram: false,
    linkedin: false,
    youtube: false
  });
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    scheduleDate: '',
    scheduleTime: '',
    videoTitle: '',
    videoDescription: '',
    tags: '',
  });

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setFormData(prev => ({
            ...prev,
            description: prev.description + ' ' + finalTranscript
          }));
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const requestMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasMediaPermission(true);
      return true;
    } catch (err) {
      setHasMediaPermission(false);
      return false;
    }
  };

  const handleVoiceTyping = async () => {
    if (!hasMediaPermission && !(await requestMicPermission())) {
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const handleCrossPostToggle = (platform) => {
    setCrossPostTo(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const renderPlatformSpecificFields = () => {
    switch (activePlatform) {
      case 'youtube':
        return (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Upload Video</label>
                <FilePond
                  files={videoFiles}
                  onupdatefiles={setVideoFiles}
                  allowMultiple={false}
                  maxFiles={1}
                  name="video"
                  labelIdle='Drag & Drop your video or <span class="filepond--label-action">Browse</span>'
                  acceptedFileTypes={['video/*']}
                  stylePanelAspectRatio="16:9"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Upload Thumbnail</label>
                <FilePond
                  files={thumbnailFiles}
                  onupdatefiles={setThumbnailFiles}
                  allowMultiple={false}
                  maxFiles={1}
                  name="thumbnail"
                  labelIdle='Drag & Drop thumbnail or <span class="filepond--label-action">Browse</span>'
                  acceptedFileTypes={['image/*']}
                  stylePanelAspectRatio="16:9"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Video Title</label>
              <input
                type="text"
                name="videoTitle"
                value={formData.videoTitle}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Enter video title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Video Description</label>
              <textarea
                name="videoDescription"
                value={formData.videoDescription}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Enter video description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Enter tags (comma separated)"
              />
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="mb-6">
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                acceptedFileTypes={['image/*', 'video/*']}
                stylePanelAspectRatio="16:9"
                imagePreviewHeight={320}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Enter post title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="What's on your mind?"
              />
            </div>
          </>
        );
    }
  };

  const renderSocialInteractions = () => {
    switch (activePlatform) {
      case 'youtube':
        return (
          <div className="flex items-center justify-between pt-3 border-t border-gray-700">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <HandThumbUpIcon className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500">
              <HandThumbDownIcon className="w-5 h-5" />
              <span className="text-sm">Dislike</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <ShareIcon className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        );
      case 'instagram':
        return (
          <div className="flex items-center justify-between pt-3 border-t border-gray-700">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500">
              <HeartIcon className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <ShareIcon className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        );
      case 'facebook':
        return (
          <div className="flex items-center justify-between pt-3 border-t border-gray-700">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <HandThumbUpIcon className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <ShareIcon className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        );
      case 'linkedin':
        return (
          <div className="flex items-center justify-between pt-3 border-t border-gray-700">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <HandThumbUpIcon className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <ShareIcon className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPreview = () => {
    if (activePlatform === 'youtube') {
      return (
        <>
          {videoFiles.length > 0 ? (
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <video 
                src={URL.createObjectURL(videoFiles[0].file)} 
                controls 
                className="w-full h-full object-cover"
              />
            </div>
          ) : thumbnailFiles.length > 0 ? (
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={URL.createObjectURL(thumbnailFiles[0].file)} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-gray-700 flex items-center justify-center mb-4">
              <PhotoIcon className="w-12 h-12 text-gray-500" />
            </div>
          )}
        </>
      );
    }

    return (
      <>
        {files.length > 0 ? (
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            {files[0].file.type.includes('video') ? (
              <video 
                src={URL.createObjectURL(files[0].file)} 
                controls 
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={URL.createObjectURL(files[0].file)} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ) : (
          <div className="aspect-video rounded-lg bg-gray-700 flex items-center justify-center mb-4">
            <PhotoIcon className="w-12 h-12 text-gray-500" />
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Create Post</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">Calendar</span>
            <span className="text-gray-400">/</span>
            <span>Create</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Platform Tabs */}
          <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-6`}>
            <div className="flex space-x-8">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformChange(platform.id)}
                  className={`flex items-center space-x-2 pb-4 px-4 relative transition-all duration-200 ${
                    activePlatform === platform.id
                      ? `text-${platform.id === 'youtube' ? 'red' : 'blue'}-500`
                      : `${isDark ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-300`
                  }`}
                >
                  <img src={platform.icon} alt={platform.name} className="w-5 h-5" />
                  <span className="font-medium">{platform.name}</span>
                  {activePlatform === platform.id && (
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        platform.id === 'youtube' ? 'bg-red-500' : 'bg-blue-500'
                      } rounded-full`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Form */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
            {/* Post Content */}
            <div className="space-y-4">
              {renderPlatformSpecificFields()}

              {/* Schedule */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Schedule Date</label>
                  <input
                    type="date"
                    name="scheduleDate"
                    value={formData.scheduleDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDark 
                        ? 'bg-[#1A1A1A] border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    } border focus:outline-none focus:border-blue-500`}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Schedule Time</label>
                  <input
                    type="time"
                    name="scheduleTime"
                    value={formData.scheduleTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDark 
                        ? 'bg-[#1A1A1A] border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    } border focus:outline-none focus:border-blue-500`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleVoiceTyping}
                    className={`p-2 rounded-lg ${
                      isRecording
                        ? 'bg-red-500 text-white'
                        : `${isDark ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-gray-600`
                    }`}
                  >
                    {isRecording ? (
                      <StopIcon className="w-5 h-5" />
                    ) : (
                      <MicrophoneIcon className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    } hover:bg-gray-600`}
                  >
                    <SparklesIcon className="w-5 h-5" />
                    <span>AI Assistant</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600">
                    Draft
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    Schedule Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Sidebar */}
        <div className="w-80 space-y-4">
          {/* Preview Section */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-4`}>
            <h2 className="font-semibold mb-4">Preview</h2>
            <div className={`rounded-lg ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'} p-4`}>
              {/* Platform Icon */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <img 
                    src={socialPlatforms.find(p => p.id === activePlatform)?.icon} 
                    alt={activePlatform}
                    className="w-5 h-5"
                  />
                </div>
                <span className="font-medium">Preview</span>
              </div>

              {/* Content Preview */}
              {renderPreview()}

              {/* Post Content */}
              <div className="space-y-2 mb-4">
                {(activePlatform === 'youtube' ? formData.videoTitle : formData.title) && (
                  <h3 className="font-medium">
                    {activePlatform === 'youtube' ? formData.videoTitle : formData.title}
                  </h3>
                )}
                <p className="text-sm text-gray-400">
                  {(activePlatform === 'youtube' ? formData.videoDescription : formData.description) || 'No description yet...'}
                </p>
              </div>

              {/* Platform-specific Social Interactions */}
              {renderSocialInteractions()}
            </div>
          </div>

          {/* Cross-posting Section */}
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-4`}>
            <h2 className="font-semibold mb-4">Cross-post to</h2>
            <div className="space-y-3">
              {socialPlatforms.map(platform => {
                if (platform.id === activePlatform) return null;
                
                return (
                  <label 
                    key={platform.id}
                    className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/10"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <img 
                          src={platform.icon} 
                          alt={platform.name} 
                          className="w-5 h-5"
                        />
                      </div>
                      <span>{platform.name}</span>
                    </div>
                    <div 
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        crossPostTo[platform.id]
                          ? 'bg-blue-500 border-blue-500'
                          : `border-gray-400 ${isDark ? 'bg-[#1A1A1A]' : 'bg-white'}`
                      }`}
                      onClick={() => handleCrossPostToggle(platform.id)}
                    >
                      {crossPostTo[platform.id] && (
                        <CheckIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
            {Object.values(crossPostTo).some(value => value) && (
              <p className="text-sm text-gray-400 mt-4">
                Note: Content will be optimized for each platform automatically
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mic Permission Alert */}
      {hasMediaPermission === false && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 max-w-md`}>
            <h3 className="text-xl font-semibold mb-4">Microphone Access Required</h3>
            <p className="text-gray-400 mb-6">
              Please allow microphone access to use voice typing. You can enable this in your browser settings.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setHasMediaPermission(null)}
                className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={requestMicPermission}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
