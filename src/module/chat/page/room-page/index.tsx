import { TeamOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useRef, useState } from 'react'
import style from './style.module.css'
import Lottie from 'react-lottie'
import chatAnimation from './../../../../assets/lotties/chat.json'
import elipseAnimation from './../../../../assets/lotties/elipses.json'
import Cookies from 'universal-cookie'
import useNavigation from 'react-router-dom'
import { Link } from 'react-router-dom'

interface IProps {
  setRoom: (value: string) => void
}

export const RoomPage = ({ setRoom }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const cookie = new Cookies()

  const chatOption = {
    loop: true,
    autoplay: true,
    animationData: chatAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const elipsOption = {
    loop: true,
    autoplay: true,
    animationData: elipseAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className={style.wrapper}>
      <Lottie
        options={elipsOption}
        style={{
          position: 'fixed',
        }}
        height={1000}
        width={1500}
      />
      <div className={style.container}>
        <Input
          size="large"
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder="Enter chat room"
          prefix={<TeamOutlined />}
        />
        <Lottie options={chatOption} height={250} width={330} />
        <Button size="large" type="primary" onClick={() => setRoom(inputValue)}>
          Submit
        </Button>
        <Link
          className={style.link}
          to="/auth"
          onClick={() => {
            cookie.set('auth-token', null)
          }}
        >
          Log out
        </Link>
      </div>
    </div>
  )
}
