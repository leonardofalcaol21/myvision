import ReactECharts from 'echarts-for-react'

interface GaugeChartProps { title?: string; value: number; max?: number; unit?: string }

const GaugeChart: React.FC<GaugeChartProps> = ({ title, value, max = 100, unit = '%' }) => {
  const option = {
    series: [{
      type: 'gauge', max,
      progress: { show: true, width: 18 },
      pointer: { show: true },
      axisLine: { lineStyle: { width: 18 } },
      axisTick: { show: false },
      splitLine: { length: 15, lineStyle: { width: 2, color: '#999' } },
      axisLabel: { distance: 25, color: '#999', fontSize: 12 },
      anchor: { show: true, showAbove: true, size: 20, itemStyle: { borderWidth: 8 } },
      title: { show: !!title, offsetCenter: [0, '70%'], fontSize: 13 },
      detail: { valueAnimation: true, fontSize: 28, fontWeight: 700, offsetCenter: [0, '40%'], formatter: `{value}${unit}`, color: '#1677ff' },
      data: [{ value, name: title || '' }],
    }],
    color: ['#1677ff'],
  }
  return <ReactECharts option={option} style={{ height: 280 }} />
}

export default GaugeChart
