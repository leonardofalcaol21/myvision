import { Card, Statistic, Typography } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { KpiData } from '../../types'

const { Text } = Typography

interface KpiCardProps { data: KpiData }

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  const isPositive = data.change >= 0
  return (
    <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderLeft: `4px solid ${data.color || '#1677ff'}` }}>
      <Statistic title={<Text type="secondary">{data.title}</Text>} value={data.value} suffix={data.unit} valueStyle={{ color: data.color || '#1677ff', fontWeight: 700 }} />
      <div style={{ marginTop: 8 }}>
        {isPositive
          ? <Text style={{ color: '#52c41a' }}><ArrowUpOutlined /> {Math.abs(data.change)}% em relação ao mês anterior</Text>
          : <Text style={{ color: '#ff4d4f' }}><ArrowDownOutlined /> {Math.abs(data.change)}% em relação ao mês anterior</Text>
        }
      </div>
    </Card>
  )
}

export default KpiCard
