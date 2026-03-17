import ReactECharts from 'echarts-for-react'

interface BarChartProps {
  title?: string
  categories: string[]
  series: { name: string; data: number[] }[]
}

const BarChart: React.FC<BarChartProps> = ({ title, categories, series }) => {
  const option = {
    title: title ? { text: title, textStyle: { fontSize: 14, fontWeight: 600 } } : undefined,
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
    xAxis: { type: 'category', data: categories, axisLabel: { rotate: 30 } },
    yAxis: { type: 'value' },
    series: series.map((s) => ({ name: s.name, type: 'bar', data: s.data, barMaxWidth: 40, itemStyle: { borderRadius: [4, 4, 0, 0] } })),
    color: ['#1677ff', '#52c41a', '#faad14', '#ff4d4f'],
  }
  return <ReactECharts option={option} style={{ height: 300 }} />
}

export default BarChart
