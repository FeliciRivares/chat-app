import React, { useEffect, useState } from 'react'
import { AuthPage } from './module/auth/page'
import Cookie from 'universal-cookie'
import { ChatPage } from './module/chat/page/chat-page'
import { RoomPage } from './module/chat/page/room-page'

const cookie = new Cookie()
function App() {
  const [isLogin, setIsLogin] = useState<boolean>(cookie.get('auth-token'))
  const [room, setRoom] = useState<string | null>(null)
  // useEffect(() => {
    
  // }, [cookie])

  if (!isLogin) {
    return (
      <div>
        <AuthPage />
      </div>
    )
  }

  return <div> {room ? <ChatPage/> : <RoomPage setRoom={setRoom} />} </div>
}

export default App
