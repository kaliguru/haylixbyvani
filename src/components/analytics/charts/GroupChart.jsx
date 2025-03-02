import { useTheme } from '../../../context/ThemeContext';

function GroupChart() {
  const { isDark } = useTheme();

  const data = [
    { name: 'John Doe', value: 20, color: '#4267B2' },
    { name: 'Joe Smith', value: 22, color: '#E1306C' },
    { name: 'Jake Williams', value: 10, color: '#FFA500' },
    { name: 'Amber Brown', value: 28, color: '#00BFFF' },
    { name: 'Peter Brown', value: 16, color: '#FF4500' },
    { name: 'Mary Evans', value: 21, color: '#00CED1' },
    { name: 'David Wilson', value: 13, color: '#9370DB' },
    { name: 'Lily Roberts', value: 30, color: '#FF6347' }
  ];

  const maxValue = Math.max(...data.map(d => d.value));
  const barHeight = 25;
  const gap = 8;
  const width = 400;
  const height = (barHeight + gap) * data.length;
  const labelWidth = 80;
  const chartWidth = width - labelWidth;

  return (
    <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
      <h2 className="text-lg font-semibold mb-2">Followers Group Comment</h2>
      <div className="mt-4">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          {data.map((item, i) => (
            <g key={i} transform={`translate(0, ${i * (barHeight + gap)})`}>
              {/* Name label */}
              <text
                x={labelWidth}
                y={barHeight / 2}
                textAnchor="end"
                alignmentBaseline="middle"
                className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
              >
                {item.name}
              </text>
              
              {/* Bar */}
              <rect
                x={labelWidth + 10}
                y="0"
                width={(item.value / maxValue) * (chartWidth - 20)}
                height={barHeight}
                fill={item.color}
                rx="4"
                className="transition-all duration-300"
              />
              
              {/* Value label */}
              <text
                x={labelWidth + 20 + (item.value / maxValue) * (chartWidth - 20)}
                y={barHeight / 2}
                alignmentBaseline="middle"
                className="text-xs fill-white"
              >
                {item.value}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default GroupChart;
