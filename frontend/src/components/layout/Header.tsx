import { Layout, Avatar, Dropdown, Typography, Space, Tag } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const { Header: AntHeader } = Layout
const { Text } = Typography

const roleColors: Record<string, string> = { admin: 'red', manager: 'blue', operator: 'green', client: 'orange' }
const roleLabels: Record<string, string> = { admin: 'Administrador', manager: 'Gestor', operator: 'Operacional', client: 'Cliente' }

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const menuItems = [
    { key: 'profile', icon: <SettingOutlined />, label: 'Configurações' },
    { type: 'divider' as const },
    { key: 'logout', icon: <LogoutOutlined />, label: 'Sair', danger: true, onClick: () => { logout(); navigate('/login') } },
  ]

  return (
    <AntHeader style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      <Text strong style={{ fontSize: 18, color: '#1677ff' }}>🔭 MyVision</Text>
      <Space>
        {user && <Tag color={roleColors[user.role]}>{roleLabels[user.role]}</Tag>}
        <Dropdown menu={{ items: menuItems }} placement="bottomRight">
          <Space style={{ cursor: 'pointer' }}>
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<UserOutlined />} />
            <Text>{user?.name}</Text>
          </Space>
        </Dropdown>
      </Space>
    </AntHeader>
  )
}

export default Header
