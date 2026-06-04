import React from 'react'
import AppRoutes from './app.Routes'
import { AuthProvider } from './features/auth/auth.context'



const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
  </AuthProvider>
  )
}

export default App
