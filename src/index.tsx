import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/style/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthPage } from './module/auth/page'
import { RoomPage } from './module/chat/page/room-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/room',
    element: <RoomPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5A54F9',
          borderRadius: 16,
          colorText: '#131212',
          colorBgContainer: '#fff',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)

reportWebVitals()
