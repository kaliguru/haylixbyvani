import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function AddBrand() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    brandName: '',
    category: '',
    websiteUrl: '',
    phoneNo: '',
    description: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
  });

  useEffect(() => {
    // Add dark/light class to body for FilePond styling
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);

    return () => {
      document.body.classList.remove('dark', 'light');
    };
  }, [isDark]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/dashboard/brands');
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/dashboard/brands')}
              className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-semibold">Add Your Brand</h1>
          </div>
          <div className="flex items-center space-x-2 mt-1 ml-10">
            <span className="text-gray-400">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">Brands</span>
            <span className="text-gray-400">/</span>
            <span>Add Brand</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={`${isDark ? 'bg-[#242424]' : 'bg-white'} rounded-lg p-6`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Logo</label>
            <div className="flex justify-center">
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                name="files"
                labelIdle='Drop logo or Browse'
                imagePreviewHeight={150}
                stylePanelAspectRatio="1:1"
                className="w-[150px]"
                allowImagePreview={true}
                imagePreviewMinHeight={150}
                imagePreviewMaxHeight={150}
                imageCropAspectRatio="1:1"
                imageResizeTargetWidth={200}
                imageResizeTargetHeight={200}
                styleLoadIndicatorPosition="center bottom"
                styleProgressIndicatorPosition="center bottom"
                styleButtonRemoveItemPosition="center bottom"
                styleButtonProcessItemPosition="center bottom"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Brand Name</label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="e.g. Abstract Digital Art"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700 focus:border-blue-500' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500'
                } border focus:outline-none`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Branding Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Category</option>
                <option value="tech">Technology</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food & Beverage</option>
                <option value="health">Health & Wellness</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Website URL</label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="External Link Here"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone No</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Brand Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Description"
              className={`w-full px-4 py-2 rounded-lg ${
                isDark 
                  ? 'bg-[#1A1A1A] border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              } border focus:outline-none focus:border-blue-500`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter Address"
              className={`w-full px-4 py-2 rounded-lg ${
                isDark 
                  ? 'bg-[#1A1A1A] border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              } border focus:outline-none focus:border-blue-500`}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-[#1A1A1A] border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                } border focus:outline-none focus:border-blue-500`}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save Brand
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBrand;
