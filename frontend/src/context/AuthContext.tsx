import React, { createContext, useContext, useState, useEffect } from 'react'
import { AuthContextType, User } from '../types'
import api from '../services/api'

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(localStorage.getItem('myvision_token'))

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const storedUser = localStorage.getItem('myvision_user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [token])

  const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    const { token: newToken, user: userData } = response.data
    localStorage.setItem('myvision_token', newToken)
    localStorage.setItem('myvision_user', JSON.stringify(userData))
    api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    setToken(newToken)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('myvision_token')
    localStorage.removeItem('myvision_user')
    delete api.defaults.headers.common['Authorization']
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
