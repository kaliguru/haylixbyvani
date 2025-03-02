import { useTheme } from '../../../context/ThemeContext';
import { HandThumbUpIcon, ChatBubbleLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

function PostsTable({ platform = 'youtube' }) {
  const { isDark } = useTheme();

  const posts = [
    {
      name: 'Blog Post',
      date: '25/02/2025',
      view: 'Lorem5',
      impression: 'Lorem5',
      watchTime: '4hrs',
      subscribers: '+24',
      impressionCTR: '+24'
    },
    {
      name: 'News Article',
      date: '26/02/2025',
      view: 'Lorem6',
      impression: 'Lorem6',
      watchTime: '4hrs',
      subscribers: '+24',
      impressionCTR: '+24'
    }
  ];

  return (
    <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`text-left ${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              <th className="py-3 px-4">Post Name</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">View</th>
              <th className="py-3 px-4">Impression</th>
              <th className="py-3 px-4">Watch Time</th>
              <th className="py-3 px-4">Subscribers</th>
              <th className="py-3 px-4">Impression CTR</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {posts.map((post, index) => (
              <tr key={index} className="text-sm">
                <td className="py-3 px-4">{post.name}</td>
                <td className="py-3 px-4">{post.date}</td>
                <td className="py-3 px-4">{post.view}</td>
                <td className="py-3 px-4">{post.impression}</td>
                <td className="py-3 px-4">
                  <span className="text-blue-500">{post.watchTime}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-1">
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 px-2 py-1">
                      {post.subscribers}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-1">
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 px-2 py-1">
                      {post.impressionCTR}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostsTable;
