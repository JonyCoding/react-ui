import React, { useState,useEffect,useRef,useContext } from 'react'
import {ThemeContext} from '../App'
// useState
const LikeButton: React.FC = () => {
    let [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // 不受执行的影响，不会被闭包
    const likeRef = useRef(0)
    // 获取dom
    const domRef = useRef<HTMLInputElement>(null)
    // 导入全局context
    const themes = useContext(ThemeContext)
    console.log(themes);
    // 渲染后执行的操作（每次渲染之后都执行）
    useEffect(()=>{
        console.log("2313");
        document.title = `点击了${like}次`
        // 添加依赖 只有like的时候才会更新视图
    },[like])
    useEffect(()=>{
        if(domRef&&domRef.current){
            domRef.current.focus()
            domRef.current.value='123'
        }
    },[on])
    function handleAlertClick(){
        setTimeout(() => {
            alert('you clicked on '+ likeRef.current)
        }, 2);
    }
    return (
        <>
        <input type="text" ref={domRef}/>
        <button onClick={() => { setLike(++like);likeRef.current++ }}>
                {like}  👍
        </button>
        <button onClick={() => { setOn(!on) }}>
                 {on?'关闭':'打开'}👍
        </button>
        <button onClick={handleAlertClick}>
                 alert
        </button>
        </>
    )
}
export default LikeButton
// 在函数组件添加satate成为可能