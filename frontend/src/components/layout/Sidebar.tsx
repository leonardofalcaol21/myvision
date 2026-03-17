import { Layout, Menu } from 'antd'
import { DashboardOutlined, BarChartOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const { Sider } = Layout

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const allItems = [
    { key: '/',         icon: <DashboardOutlined />, label: 'Dashboard',     roles: ['admin','manager','operator','client'] },
    { key: '/reports',  icon: <BarChartOutlined />,  label: 'Relatórios',    roles: ['admin','manager'] },
    { key: '/admin',    icon: <TeamOutlined />,      label: 'Usuários',      roles: ['admin'] },
    { key: '/settings', icon: <SettingOutlined />,   label: 'Configurações', roles: ['admin'] },
  ]

  const menuItems = allItems
    .filter((item) => user && item.roles.includes(user.role))
    .map(({ key, icon, label }) => ({ key, icon, label }))

  return (
    <Sider theme="dark" style={{ minHeight: '100vh' }} breakpoint="lg" collapsedWidth="0">
      <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        🔭 MyVision
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={menuItems} onClick={({ key }) => navigate(key)} style={{ marginTop: 8 }} />
    </Sider>
  )
}

export default Sidebar
