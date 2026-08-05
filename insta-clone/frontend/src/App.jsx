import React from 'react'
import AppRoutes from './app.Routes'
import { AuthProvider } from './features/auth/auth.context'
import { PostProvider } from './features/post/post.context'
import { FollowProvider } from './features/follow/follow.context'



const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <FollowProvider>
          <AppRoutes />
        </FollowProvider>
      </PostProvider>
  </AuthProvider>
  )
}

export default App
