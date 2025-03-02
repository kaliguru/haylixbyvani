import { useState } from 'react';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

function Heylix({ onImageView }) {
  const { isDark } = useTheme();

  const files = [
    { name: 'heylix1.jpg', size: '92.45 KB', date: '2025-02-25 07:33:21', type: 'image' },
    { name: 'heylix2.jpg', size: '88.67 KB', date: '2025-02-25 07:32:57', type: 'image' },
  ];

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className={`text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <th className="py-3">File Name</th>
            <th className="py-3">Size</th>
            <th className="py-3">Date Modified</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
          {files.map((file) => (
            <tr key={file.name}>
              <td className="py-3 flex items-center space-x-3">
                <div className={`w-10 h-10 rounded overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                  <img src="/login-bg.jpg" alt={file.name} className="w-full h-full object-cover" />
                </div>
                <span>{file.name}</span>
              </td>
              <td className="py-3">{file.size}</td>
              <td className="py-3">{file.date}</td>
              <td className="py-3">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => onImageView('/login-bg.jpg')}
                    className={`p-2 rounded ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className={`p-2 rounded ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Heylix;
