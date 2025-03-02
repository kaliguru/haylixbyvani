import { useTheme } from '../../../context/ThemeContext';

function GenderChart() {
  const { isDark } = useTheme();

  const data = [
    { label: 'Male', value: 60, color: '#4267B2' },
    { label: 'Female', value: 40, color: '#E1306C' }
  ];

  const width = 400;
  const height = 200;
  const barWidth = 60;
  const gap = 20;
  const startX = (width - (data.length * barWidth + (data.length - 1) * gap)) / 2;

  return (
    <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
      <h2 className="text-lg font-semibold mb-2">Male/Female</h2>
      <div className="mt-4">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Y-axis grid lines */}
          {[0, 20, 40, 60, 80].map((value, i) => (
            <g key={i}>
              <line
                x1="0"
                y1={height - (value / 80) * height}
                x2={width}
                y2={height - (value / 80) * height}
                stroke={isDark ? '#333' : '#eee'}
                strokeWidth="1"
              />
              <text
                x="-10"
                y={height - (value / 80) * height}
                textAnchor="end"
                alignmentBaseline="middle"
                className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
              >
                {value}
              </text>
            </g>
          ))}

          {/* Bars */}
          {data.map((item, i) => (
            <g key={i}>
              <rect
                x={startX + i * (barWidth + gap)}
                y={height - (item.value / 80) * height}
                width={barWidth}
                height={(item.value / 80) * height}
                fill={item.color}
                rx="4"
              />
              <text
                x={startX + i * (barWidth + gap) + barWidth / 2}
                y={height + 20}
                textAnchor="middle"
                className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
              >
                {item.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default GenderChart;
