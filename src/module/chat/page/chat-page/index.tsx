import style from './style.module.css'
import elipseAnimation from './../../../../assets/lotties/elipses.json'
import Lottie from 'react-lottie'
import { ChatInput } from '../../components/chat-input'
import { ChatItems } from '../../components/chat-items'

export const ChatPage = () => {
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
       speed={0.2}
        options={elipsOption}
        style={{
          position: 'fixed',
        }}
        height={1000}
        width={2000}
       
      />
      <div className={style.container}>
        <div className={style.chatHeader}>Room Name</div>
        <ChatItems/>
        <ChatInput/>
      </div>
    </div>
  )
}
