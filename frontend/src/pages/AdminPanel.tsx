import { Layout, Card, Table, Tag, Button, Typography, Space, Row, Col } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

const { Content } = Layout
const { Title } = Typography

const roleColors: Record<string, string> = { admin: 'red', manager: 'blue', operator: 'green', client: 'orange' }
const roleLabels: Record<string, string> = { admin: 'Administrador', manager: 'Gestor', operator: 'Operacional', client: 'Cliente' }

const mockUsers = [
  { id: 1, name: 'Leonardo Falcão',    email: 'admin@myvision.com',  role: 'admin',    status: 'active'   },
  { id: 2, name: 'Ana Gestora',        email: 'ana@myvision.com',    role: 'manager',  status: 'active'   },
  { id: 3, name: 'Carlos Operacional', email: 'carlos@myvision.com', role: 'operator', status: 'active'   },
  { id: 4, name: 'Cliente Exemplo',    email: 'cliente@empresa.com', role: 'client',   status: 'inactive' },
]

const AdminPanel = () => {
  const columns = [
    { title: 'Nome',   dataIndex: 'name',   key: 'name'   },
    { title: 'E-mail', dataIndex: 'email',  key: 'email'  },
    { title: 'Perfil', dataIndex: 'role',   key: 'role',   render: (role: string) => <Tag color={roleColors[role]}>{roleLabels[role]}</Tag> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (s: string) => <Tag color={s === 'active' ? 'success' : 'default'}>{s === 'active' ? 'Ativo' : 'Inativo'}</Tag> },
    { title: 'Ações',  key: 'actions', render: () => <Space><Button size="small" icon={<EditOutlined />}>Editar</Button><Button size="small" danger icon={<DeleteOutlined />}>Remover</Button></Space> },
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
            <Col><Title level={4} style={{ margin: 0 }}>👥 Gerenciamento de Usuários</Title></Col>
            <Col><Button type="primary" icon={<PlusOutlined />}>Novo Usuário</Button></Col>
          </Row>
          <Card bordered={false} style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <Table columns={columns} dataSource={mockUsers} rowKey="id" pagination={{ pageSize: 10 }} />
          </Card>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminPanel
