import { SendOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useState } from 'react'
import style from './style.module.css'
const { TextArea } = Input

export const ChatInput = () => {
  const [value, setValue] = useState('')
  return (
    <div className={style.wrapper}>
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter message..."
        size="large"
        bordered={false}
        autoSize={{ minRows: 1, maxRows: 5 }}
      />
      <div className={style.buttonContainer}>
        <Button type="primary" shape="round" size="large" icon={<SendOutlined />} />
      </div>
    </div>
  )
}
