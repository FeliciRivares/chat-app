import { Button, message } from 'antd'
import React from 'react'
import style from './style.module.css'
import { auth, provider } from '../../../core/firebase/index'
import { signInWithPopup } from 'firebase/auth'
import Cookie from 'universal-cookie'
import { errorMessage, successMessage } from '../../../core/helpers/message-api'
import { redirect,  useNavigate, } from 'react-router-dom'

const cookie = new Cookie()


export const AuthPage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate();

  const singInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      cookie.set('auth-token', res.user.refreshToken)
      successMessage(messageApi, 'Login successful')
      navigate('/');
    } catch (error) {
      errorMessage(messageApi, `${error}`)
    }
  }

  return (
    <div className={style.wrapper}>
      {contextHolder}
      <div className={style.container}>
        <p className={style.title}>Sing in to continue</p>
        <Button onClick={() => singInWithGoogle()} type="primary" shape="round" size="large">
          Sing in with Google
        </Button>
      </div>
    </div>
  )
}
