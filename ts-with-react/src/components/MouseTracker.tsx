import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
    const [positions, setPostions] = useState({ x: 0, y: 0 })
    // 每次都会执行
    // 在执行下一个的时候清除上一个
    // 在那里写回掉函数
    useEffect(() => {
        console.log("add listern");
        const updateMouse = (e: MouseEvent) => {
            console.log('inner');
            setPostions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)
        return () => {
            console.log("unadd listern");

            document.removeEventListener('click', updateMouse)
        }
    },[])
    return (
        <p>X:{positions.x},Y:{positions.y}</p>
    )
}
export default MouseTracker