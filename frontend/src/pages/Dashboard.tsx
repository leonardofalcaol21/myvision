import { Layout, Row, Col, Card, Typography } from 'antd'
import { useAuth } from '../context/AuthContext'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import KpiCard from '../components/kpi/KpiCard'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
import GaugeChart from '../components/charts/GaugeChart'
import { KpiData } from '../types'

const { Content } = Layout
const { Title } = Typography

const kpis: KpiData[] = [
  { title: 'Receita Total',     value: 'R$ 284.500', change: 12.5, color: '#1677ff' },
  { title: 'Clientes Ativos',   value: 1340,         change: 8.2,  color: '#52c41a' },
  { title: 'Ticket Médio',      value: 'R$ 212',     change: -3.1, color: '#faad14' },
  { title: 'Taxa de Conversão', value: 24.8,         change: 5.4,  unit: '%', color: '#722ed1' },
]

const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          <Title level={4} style={{ marginBottom: 24 }}>Olá, {user?.name}! 👋 Aqui está o resumo estratégico.</Title>
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            {kpis.map((kpi) => <Col xs={24} sm={12} lg={6} key={kpi.title}><KpiCard data={kpi} /></Col>)}
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            <Col xs={24} lg={16}>
              <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <LineChart
                  title="Evolução de Receita (R$)"
                  categories={months}
                  series={[
                    { name: '2025', data: [180000,195000,210000,198000,225000,240000,235000,252000,268000,275000,280000,284500] },
                    { name: '2024', data: [150000,162000,170000,168000,182000,195000,190000,205000,215000,220000,228000,235000] },
                  ]}
                />
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', height: '100%' }}>
                <GaugeChart title="Meta Atingida" value={78} unit="%" />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <BarChart
                  title="Vendas por Canal"
                  categories={['Jan','Fev','Mar','Abr','Mai','Jun']}
                  series={[{ name: 'Online', data: [320,410,380,490,520,580] }, { name: 'Presencial', data: [210,180,260,290,310,340] }]}
                />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <BarChart
                  title="Clientes por Região"
                  categories={['Norte','Nordeste','Centro-Oeste','Sudeste','Sul']}
                  series={[{ name: 'Clientes', data: [120,340,180,680,290] }]}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
