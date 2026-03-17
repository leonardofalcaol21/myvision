import ReactECharts from 'echarts-for-react'

interface LineChartProps {
  title?: string
  categories: string[]
  series: { name: string; data: number[] }[]
}

const LineChart: React.FC<LineChartProps> = ({ title, categories, series }) => {
  const option = {
    title: title ? { text: title, textStyle: { fontSize: 14, fontWeight: 600 } } : undefined,
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
    xAxis: { type: 'category', data: categories, boundaryGap: false },
    yAxis: { type: 'value' },
    series: series.map((s) => ({ name: s.name, type: 'line', data: s.data, smooth: true, areaStyle: { opacity: 0.1 } })),
    color: ['#1677ff', '#52c41a', '#faad14', '#ff4d4f'],
  }
  return <ReactECharts option={option} style={{ height: 300 }} />
}

export default LineChart
