import React from 'react'
import AppRoutes from './app.Routes'
import { AuthProvider } from './features/auth/auth.context'
import { PostProvider } from './features/post/post.context'



const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
  </AuthProvider>
  )
}

export default App
