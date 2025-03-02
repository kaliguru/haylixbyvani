import { useTheme } from '../../../context/ThemeContext';

function CountriesChart() {
  const { isDark } = useTheme();

  const data = [
    { country: 'France', value: 75 },
    { country: 'Italy', value: 65 },
    { country: 'Netherlands', value: 55 },
    { country: 'United Kingdom', value: 45 },
    { country: 'Canada', value: 35 },
    { country: 'South Korea', value: 25 }
  ];

  const barHeight = 20;
  const gap = 10;
  const width = 400;
  const height = (barHeight + gap) * data.length;
  const labelWidth = 100;
  const chartWidth = width - labelWidth;

  return (
    <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
      <h2 className="text-lg font-semibold mb-2">Top 5 Countries</h2>
      <div className="mt-4">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          {data.map((item, i) => (
            <g key={i} transform={`translate(0, ${i * (barHeight + gap)})`}>
              {/* Country label */}
              <text
                x={labelWidth}
                y={barHeight / 2}
                textAnchor="end"
                alignmentBaseline="middle"
                className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
              >
                {item.country}
              </text>
              
              {/* Bar */}
              <rect
                x={labelWidth + 10}
                y="0"
                width={(item.value / 100) * (chartWidth - 20)}
                height={barHeight}
                fill="#4267B2"
                rx="4"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default CountriesChart;
