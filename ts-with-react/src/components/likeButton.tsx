import React, { useState,useEffect } from 'react'
// useState
const LikeButton: React.FC = () => {
    let [like, setLike] = useState(0)
    let [on, setOn] = useState(true)
    // 渲染后执行的操作（每次渲染之后都执行）
    useEffect(()=>{
        console.log("2313");
        document.title = `点击了${like}次`
    },[like])
    return (
        <>
        <button onClick={() => { setLike(++like) }}>
                {like}  👍
        </button>
        <button onClick={() => { setOn(!on) }}>
                 {on?'关闭':'打开'}👍
        </button>
        </>
    )
}
export default LikeButton
// 在函数组件添加satate成为可能