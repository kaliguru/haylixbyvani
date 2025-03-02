import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

function Brands() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const dummyBrand = {
    name: "Brand Name",
    category: "Category Name",
    location: "Bangalore",
    phone: "9875542210",
    image: "https://www.google.com/favicon.ico"
  };

  const handleCreateClick = () => {
    navigate('/dashboard/brands/add');
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Manage Brands</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span>Manage Brands</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Create Brand Card */}
        <div 
          onClick={handleCreateClick}
          className={`rounded-lg border-2 border-dashed ${isDark ? 'border-gray-700' : 'border-gray-300'} p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors min-h-[250px]`}
        >
          <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
            <PlusIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-medium">Create Brand</h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} text-center mt-2`}>
            Click here to create a new brand
          </p>
        </div>

        {/* Sample Brand Card */}
        <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 shadow-sm`}>
          <div className="flex justify-center items-center h-32 mb-4 bg-gray-100 rounded-lg">
            <img 
              src={dummyBrand.image} 
              alt={dummyBrand.name}
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-lg font-medium">{dummyBrand.name}</h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {dummyBrand.category}
          </p>
          <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
            <span>📍 {dummyBrand.location}</span>
            <span>📞 {dummyBrand.phone}</span>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="p-2 rounded bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
              <PencilIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
