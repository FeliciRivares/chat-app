import style from './style.module.css'

export const ChatItems = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.messageList}>
            <div className={style.message} >items</div> 
            <div className={style.message} >items</div> 
            <div className={style.message} >items</div> 
            <div className={`${style.message} ${style.out}`} >items</div> 
            <div className={`${style.message} ${style.out}`} >items</div> 
            <div className={style.message} >items</div> 
            <div className={`${style.message} ${style.out}`} >items</div> 
            <div className={style.message} >items</div> 
            <div className={`${style.message} ${style.out}`} >items</div> 
            <div className={style.message} >items</div> 
            <div className={style.message} >items</div> 
            <div className={`${style.message} ${style.out}`} >items</div> 
            <div className={style.message} >items</div> 
            <div className={style.message} >items</div> 
            </div>
            
        </div>
    )
}