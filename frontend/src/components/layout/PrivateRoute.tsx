import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { User } from '../../types'

interface PrivateRouteProps {
  children: React.ReactNode
  allowedRoles?: User['role'][]
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (allowedRoles && user && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />
  return <>{children}</>
}

export default PrivateRoute
