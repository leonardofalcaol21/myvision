import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Result status="404" title="404" subTitle="Página não encontrada." extra={<Button type="primary" onClick={() => navigate('/')}>Voltar ao Dashboard</Button>} />
    </div>
  )
}

export default NotFound
