import { useTheme } from '../../context/ThemeContext';

const chartData = {
  facebook: {
    pageView: {
      data: [
        { date: '16 Jan', value: 140 },
        { date: '19 Jan', value: 60 },
        { date: '22 Jan', value: 80 },
        { date: '25 Jan', value: 140 },
        { date: '28 Jan', value: 110 },
        { date: '31 Jan', value: 60 },
        { date: '03 Feb', value: 100 }
      ],
      yAxis: {
        min: 40,
        max: 160,
        step: 20,
        label: 'Stock Price (USD)'
      },
      color: "#4267B2",
      title: "Page View/Page Reach",
      subtitle: "Dynamic Updating Chart"
    },
    interaction: {
      data: [
        { date: '16 Jan', value: 1000 },
        { date: '24 Jan', value: 2500 },
        { date: 'Feb \'17', value: 1500 },
        { date: '08 Feb', value: 2000 },
        { date: '16 Feb', value: 1000 },
        { date: '24 Feb', value: 2000 }
      ],
      yAxis: {
        min: 500,
        max: 2500,
        step: 500,
        label: 'Stock Price (USD)'
      },
      color: "#4267B2",
      title: "Interaction Link Clicked",
      subtitle: "Stock Price Movement"
    }
  },
  instagram: {
    pageView: {
      data: [
        { date: '16 Jan', value: 140 },
        { date: '19 Jan', value: 60 },
        { date: '22 Jan', value: 80 },
        { date: '25 Jan', value: 140 },
        { date: '28 Jan', value: 110 },
        { date: '31 Jan', value: 60 },
        { date: '03 Feb', value: 100 }
      ],
      yAxis: {
        min: 40,
        max: 160,
        step: 20,
        label: 'Stock Price (USD)'
      },
      color: "#E1306C",
      title: "Page View/Page Reach",
      subtitle: "Dynamic Updating Chart"
    },
    interaction: {
      data: [
        { date: '16 Jan', value: 1000 },
        { date: '24 Jan', value: 2500 },
        { date: 'Feb \'17', value: 1500 },
        { date: '08 Feb', value: 2000 },
        { date: '16 Feb', value: 1000 },
        { date: '24 Feb', value: 2000 }
      ],
      yAxis: {
        min: 500,
        max: 2500,
        step: 500,
        label: 'Stock Price (USD)'
      },
      color: "#E1306C",
      title: "Interaction Link Clicked",
      subtitle: "Stock Price Movement"
    }
  },
  linkedin: {
    pageView: {
      data: [
        { date: '16 Jan', value: 140 },
        { date: '19 Jan', value: 60 },
        { date: '22 Jan', value: 80 },
        { date: '25 Jan', value: 140 },
        { date: '28 Jan', value: 110 },
        { date: '31 Jan', value: 60 },
        { date: '03 Feb', value: 100 }
      ],
      yAxis: {
        min: 40,
        max: 160,
        step: 20,
        label: 'Stock Price (USD)'
      },
      color: "#0A66C2",
      title: "Impression",
      subtitle: "Dynamic Updating Chart"
    },
    interaction: {
      data: [
        { date: '16 Jan', value: 1000 },
        { date: '24 Jan', value: 2500 },
        { date: 'Feb \'17', value: 1500 },
        { date: '08 Feb', value: 2000 },
        { date: '16 Feb', value: 1000 },
        { date: '24 Feb', value: 2000 }
      ],
      yAxis: {
        min: 500,
        max: 2500,
        step: 500,
        label: 'Stock Price (USD)'
      },
      color: "#0A66C2",
      title: "Reaction Comment",
      subtitle: "Stock Price Movement"
    }
  },
  youtube: {
    pageView: {
      data: [
        { date: '16 Jan', value: 140 },
        { date: '19 Jan', value: 60 },
        { date: '22 Jan', value: 80 },
        { date: '25 Jan', value: 140 },
        { date: '28 Jan', value: 110 },
        { date: '31 Jan', value: 60 },
        { date: '03 Feb', value: 100 }
      ],
      yAxis: {
        min: 40,
        max: 160,
        step: 20,
        label: 'Stock Price (USD)'
      },
      color: "#FF0000",
      title: "Impression",
      subtitle: "Dynamic Updating Chart"
    },
    interaction: {
      data: [
        { date: '16 Jan', value: 1000 },
        { date: '24 Jan', value: 2500 },
        { date: 'Feb \'17', value: 1500 },
        { date: '08 Feb', value: 2000 },
        { date: '16 Feb', value: 1000 },
        { date: '24 Feb', value: 2000 }
      ],
      yAxis: {
        min: 500,
        max: 2500,
        step: 500,
        label: 'Stock Price (USD)'
      },
      color: "#FF0000",
      title: "Profile Reach",
      subtitle: "Stock Price Movement"
    }
  },
  'meta-ads': {
    pageView: {
      data: [
        { date: '16 Jan', value: 140 },
        { date: '19 Jan', value: 60 },
        { date: '22 Jan', value: 80 },
        { date: '25 Jan', value: 140 },
        { date: '28 Jan', value: 110 },
        { date: '31 Jan', value: 60 },
        { date: '03 Feb', value: 100 }
      ],
      yAxis: {
        min: 40,
        max: 160,
        step: 20,
        label: 'Stock Price (USD)'
      },
      color: "#1877F2",
      title: "Ads Reach",
      subtitle: "Dynamic Updating Chart"
    },
    interaction: {
      data: [
        { date: '16 Jan', value: 1000 },
        { date: '24 Jan', value: 2500 },
        { date: 'Feb \'17', value: 1500 },
        { date: '08 Feb', value: 2000 },
        { date: '16 Feb', value: 1000 },
        { date: '24 Feb', value: 2000 }
      ],
      yAxis: {
        min: 500,
        max: 2500,
        step: 500,
        label: 'Stock Price (USD)'
      },
      color: "#1877F2",
      title: "Ads Clicks",
      subtitle: "Stock Price Movement"
    }
  }
};

function AnalyticsChart({ type, platform }) {
  const { isDark } = useTheme();
  const data = chartData[platform]?.[type] || chartData.facebook[type];
  
  // Calculate dimensions
  const width = 400;
  const height = 200;
  const padding = { top: 10, right: 20, bottom: 20, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate scales
  const xScale = chartWidth / (data.data.length - 1);
  const yScale = chartHeight / (data.yAxis.max - data.yAxis.min);

  // Generate path
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
      <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
        {data.subtitle}
      </p>
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

          {/* Area fill with animation */}
          <path
            d={`${path} L ${points[points.length - 1].x},${height - padding.bottom} L ${padding.left},${height - padding.bottom} Z`}
            fill={`url(#gradient-${platform}-${type})`}
            fillOpacity="0.1"
            className="animate-fade-in"
          />

          {/* Line */}
          <path
            d={path}
            fill="none"
            stroke={data.color}
            strokeWidth="2"
            className="animate-draw"
          />

          {/* Definitions */}
          <defs>
            {/* Gradient */}
            <linearGradient id={`gradient-${platform}-${type}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={data.color} stopOpacity="0.3">
                <animate
                  attributeName="stopOpacity"
                  values="0.3;0.5;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor={data.color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default AnalyticsChart;
