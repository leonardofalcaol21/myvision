import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const { Title, Text } = Typography

const Login = () => {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  if (isAuthenticated) { navigate('/'); return null }

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password)
      navigate('/')
    } catch {
      messageApi.error('E-mail ou senha inválidos.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1677ff 0%, #0050b3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {contextHolder}
      <Card style={{ width: 380, borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={2} style={{ color: '#1677ff', margin: 0 }}>🔭 MyVision</Title>
          <Text type="secondary">Plataforma de Indicadores Estratégicos</Text>
        </div>
        <Form name="login" onFinish={onFinish} size="large" layout="vertical">
          <Form.Item name="email" rules={[{ required: true, message: 'Informe o e-mail' }, { type: 'email', message: 'E-mail inválido' }]}> 
            <Input prefix={<UserOutlined />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Informe a senha' }]}> 
            <Input.Password prefix={<LockOutlined />} placeholder="Senha" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Entrar</Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>Demo: admin@myvision.com / admin123</Text>
        </div>
      </Card>
    </div>
  )
}

export default Login
