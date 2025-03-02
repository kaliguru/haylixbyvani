import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function Credits() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('ai');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);

  const tabs = [
    { id: 'ai', name: 'AI Credit' },
    { id: 'ad', name: 'Ad Credit' },
  ];

  const creditPackages = [
    { credits: 800, price: 500 },
    { credits: 2000, price: 1000 },
    { credits: 6500, price: 2500 },
    { credits: 15000, price: 5000 },
  ];

  const paymentMethods = [
    { id: 'razorpay', name: 'Razorpay', icon: '/icons/razor_pay_icon.png' },
  ];

  const transactions = [
    { date: '12 Jan 2025', type: 'Debit', details: 'AI Image Generation', amount: -50, id: '12345' },
    { date: '10 Jan 2025', type: 'Credit', details: 'Purchase', amount: 2000, id: '12346' },
  ];

  const renderAICredit = () => (
    <>
      {/* Credit Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {creditPackages.map((pkg) => (
          <div
            key={pkg.credits}
            className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 text-center`}
          >
            <div className="text-3xl font-bold mb-2">{pkg.credits.toLocaleString()}</div>
            <div className="text-gray-400 mb-4">Credits</div>
            <div className="text-xl font-semibold mb-4">₹{pkg.price}</div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Purchase
            </button>
          </div>
        ))}
      </div>

      {/* Balance and Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Balance */}
        <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">AI Balance</h2>
            <div className="text-sm text-gray-400">Limit: 100,000</div>
          </div>
          <div className="aspect-square max-w-[300px] mx-auto relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke={isDark ? '#333' : '#eee'}
                strokeWidth="10"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#4150f7"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="70"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold">5,000</div>
              <div className="text-gray-400">Credits Left</div>
            </div>
          </div>
        </div>

        {/* Usage Chart */}
        <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
          <h2 className="text-xl font-semibold mb-4">Credit spent</h2>
          <div className="h-[300px] flex items-end space-x-2">
            {[2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.9, 1.4, 0.8, 0.6, 0.2].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t-lg transition-all duration-500"
                  style={{ height: `${value * 10}%` }}
                />
                <div className="text-xs text-gray-400 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderAdCredit = () => (
    <>
      {/* Add Fund Section */}
      <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6 mb-6`}>
        <h2 className="text-xl font-semibold mb-4">Add Fund</h2>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <input
              type="number"
              placeholder="Enter amount"
              className={`w-full px-4 py-2 rounded-lg ${
                isDark 
                  ? 'bg-[#1A1A1A] border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              } border focus:outline-none focus:border-blue-500`}
            />
          </div>
          <div className="relative flex-1">
            <button
              onClick={() => setIsPaymentDropdownOpen(!isPaymentDropdownOpen)}
              className={`w-full px-4 py-2 rounded-lg flex items-center justify-between ${
                isDark 
                  ? 'bg-[#1A1A1A] border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              } border`}
            >
              <span>{paymentMethod || 'Select Payment Method'}</span>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            {isPaymentDropdownOpen && (
              <div className={`absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg ${
                isDark ? 'bg-[#1A1A1A]' : 'bg-white'
              } border ${isDark ? 'border-gray-700' : 'border-gray-200'} z-10`}>
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    className="w-full px-4 py-2 flex items-center space-x-2 hover:bg-blue-500 hover:text-white"
                    onClick={() => {
                      setPaymentMethod(method.name);
                      setIsPaymentDropdownOpen(false);
                    }}
                  >
                    <img src={method.icon} alt={method.name} className="w-6 h-6" />
                    <span>{method.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Pay now
          </button>
        </div>
      </div>

      {/* Balance and Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Balance */}
        <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Ad Balance</h2>
            <button className="text-sm text-blue-500 hover:text-blue-600">
              increase limit
            </button>
          </div>
          <div className="aspect-square max-w-[300px] mx-auto relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke={isDark ? '#333' : '#eee'}
                strokeWidth="10"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#4150f7"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="70"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold">₹10,000</div>
              <div className="text-gray-400">Limit: ₹1,00,000</div>
            </div>
          </div>
        </div>

        {/* Usage Chart */}
        <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
          <h2 className="text-xl font-semibold mb-4">Amount spent</h2>
          <div className="h-[300px] flex items-end space-x-2">
            {[2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.9, 1.4, 0.8, 0.6, 0.2].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t-lg transition-all duration-500"
                  style={{ height: `${value * 10}%` }}
                />
                <div className="text-xs text-gray-400 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4150f7]">HeyLix</span>
            <span className="text-gray-400">/</span>
            <span>Credits</span>
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

      {/* Content based on active tab */}
      {activeTab === 'ai' ? renderAICredit() : renderAdCredit()}

      {/* Transaction History */}
      <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Details</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Amount</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.details}</td>
                  <td className="py-3 px-4">{transaction.type}</td>
                  <td className={`py-3 px-4 ${
                    transaction.type === 'Credit' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.type === 'Credit' ? '+' : '-'}{Math.abs(transaction.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Credits;
