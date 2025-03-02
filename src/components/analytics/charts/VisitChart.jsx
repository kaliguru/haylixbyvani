import { useTheme } from '../../../context/ThemeContext';

function VisitChart() {
  const { isDark } = useTheme();
  
  const data = {
    data: [
      { date: '16 Jan', value: 2000 },
      { date: '24 Jan', value: 1200 },
      { date: 'Feb \'17', value: 800 },
      { date: '08 Feb', value: 2200 },
      { date: '16 Feb', value: 1500 },
      { date: '24 Feb', value: 2000 }
    ],
    yAxis: {
      min: 500,
      max: 2500,
      step: 500,
      label: 'Stock Price (USD)'
    }
  };

  // Chart dimensions
  const width = 400;
  const height = 200;
  const padding = { top: 10, right: 20, bottom: 20, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate scales
  const xScale = chartWidth / (data.data.length - 1);
  const yScale = chartHeight / (data.yAxis.max - data.yAxis.min);

  // Generate points
  const points = data.data.map((point, i) => ({
    x: padding.left + i * xScale,
    y: padding.top + chartHeight - (point.value - data.yAxis.min) * yScale
  }));

  const path = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

  // Generate y-axis ticks
  const yTicks = [];
  for (let value = data.yAxis.min; value <= data.yAxis.max; value += data.yAxis.step) {
    const y = padding.top + chartHeight - (value - data.yAxis.min) * yScale;
    yTicks.push({ value, y });
  }

  return (
    <div className={`rounded-lg ${isDark ? 'bg-[#242424]' : 'bg-white'} p-6`}>
      <h2 className="text-lg font-semibold mb-2">Page Visit Follow</h2>
      <div className="aspect-[16/9] relative">
        <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
          {/* Grid lines */}
          {yTicks.map(({ y }, i) => (
            <line
              key={i}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke={isDark ? '#333' : '#eee'}
              strokeWidth="1"
            />
          ))}

          {/* Y-axis labels */}
          {yTicks.map(({ value, y }, i) => (
            <text
              key={i}
              x={padding.left - 10}
              y={y}
              textAnchor="end"
              alignmentBaseline="middle"
              className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
            >
              {value.toFixed(0)}
            </text>
          ))}

          {/* X-axis labels */}
          {data.data.map((point, i) => (
            <text
              key={i}
              x={padding.left + i * xScale}
              y={height - padding.bottom + 15}
              textAnchor="middle"
              className={`text-xs ${isDark ? 'fill-gray-400' : 'fill-gray-600'}`}
            >
              {point.date}
            </text>
          ))}

          {/* Chart line */}
          <path
            d={path}
            fill="none"
            stroke="#4267B2"
            strokeWidth="2"
          />

          {/* Area fill */}
          <path
            d={`${path} L ${points[points.length - 1].x},${height - padding.bottom} L ${padding.left},${height - padding.bottom} Z`}
            fill="url(#gradient-visit)"
            fillOpacity="0.1"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient-visit" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4267B2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4267B2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default VisitChart;
