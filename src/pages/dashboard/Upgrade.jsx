import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { CheckIcon, CircleStackIcon } from '@heroicons/react/24/outline';

function Upgrade() {
  const { isDark } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Advanced plan is initially selected

  const plans = [
    {
      name: 'Starter',
      price: 6000,
      features: [
        '1 Brand',
        '3 Any Platform',
        '25 Max Post',
        '4 Ad Campaign',
        '3 AI Tools',
        '1 GB Storage',
        'Allow Post Scheduling',
        'Image Editor Access',
        'Stock Image Access',
      ],
    },
    {
      name: 'Advanced',
      price: 10000,
      features: [
        '3 Brand',
        '5 Any Platform',
        '100 Max Post',
        '10 Ad Campaign',
        '5 AI Tools',
        '3 GB Storage',
        'Allow Post Scheduling',
        'Image Editor Access',
        'Stock Image Access',
      ],
    },
    {
      name: 'Enterprise',
      price: 20000,
      features: [
        '5 Brand',
        'All Platform',
        'Unlimited',
        'Unlimited',
        'Unlimited',
        '8 GB Storage',
        'Allow Post Scheduling',
        'Image Editor Access',
        'Stock Image Access',
      ],
    },
  ];

  const calculatePrice = (basePrice) => {
    if (isAnnual) {
      return (basePrice * 12 * 0.8).toLocaleString(); // 20% discount
    }
    return basePrice.toLocaleString();
  };

  const handleChoosePlan = (index) => {
    setSelectedPlanIndex(index);
  };

  return (
    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Upgrade Plan</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-400">Dashboards</span>
            <span className="text-gray-400">/</span>
            <span>Upgrade</span>
          </div>
        </div>
      </div>

      {/* Current Plan Banner */}
      <div className="bg-gradient-to-r from-[#4150f7] to-[#0ea5e9] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-2xl font-semibold">{plans[selectedPlanIndex].name}</h2>
            <div className="flex items-center mt-2 text-white/90">
              <CircleStackIcon className="w-5 h-5 mr-2" />
              <span>Current Plan</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white mb-2">
              ₹{calculatePrice(plans[selectedPlanIndex].price)} / {isAnnual ? 'year' : 'month'}
            </div>
            <div className="text-2xl text-white/90">
              Expire on 01 Feb 2025
            </div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <span className={`${isAnnual ? 'text-gray-400' : ''}`}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
          style={{ backgroundColor: isAnnual ? '#4150f7' : '#374151' }}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              isAnnual ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <div className="flex items-center space-x-2">
          <span className={`${!isAnnual ? 'text-gray-400' : ''}`}>Annually</span>
          <span className="animate-pulse bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
            20% off
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isSelected = index === selectedPlanIndex;
          const isPopular = index === 1;
          return (
            <div
              key={plan.name}
              className={`rounded-xl ${
                isDark ? 'bg-[#242424]' : 'bg-white'
              } p-6 relative transition-all duration-300 ${
                isSelected 
                  ? 'ring-2 ring-[#4150f7] transform scale-105 z-10 shadow-xl' 
                  : 'hover:scale-102'
              }`}
            >
              {isPopular && (
                <span className="absolute -top-3 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-6">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">₹{calculatePrice(plan.price)}</span>
                <span className="text-gray-400 ml-2">
                  / {isAnnual ? 'year' : 'month'}
                </span>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleChoosePlan(index)}
                className={`w-full py-2 rounded-lg transition-colors ${
                  isSelected 
                    ? 'bg-[#4150f7] text-white hover:bg-[#4150f7]/90' 
                    : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-current`
                }`}
              >
                {isSelected ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Upgrade;
