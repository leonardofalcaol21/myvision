export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'manager' | 'operator' | 'client'
  permissions: string[]
}

export interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export interface KpiData {
  title: string
  value: string | number
  change: number
  unit?: string
  color?: string
}

export interface ChartDataItem {
  name: string
  value: number
}