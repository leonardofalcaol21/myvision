import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import AdminPanel from '../pages/AdminPanel'
import NotFound from '../pages/NotFound'
import PrivateRoute from '../components/layout/PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute allowedRoles={['admin']}><AdminPanel /></PrivateRoute>} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default AppRoutes
