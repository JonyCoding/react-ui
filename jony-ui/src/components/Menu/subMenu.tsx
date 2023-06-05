import React, { useContext, useState,FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import {MenuItemProps} from './menuItem'

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className })=>{
    const [menuOpen,setOpen] = useState(false)
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })
    const handleClick = (e:React.MouseEvent)=>{
        console.log("object");
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(()=>{
            setOpen(toggle)
        },300)
    }
    const clickEvent = context.mode === 'vertical'?{
        onClick:handleClick
    }:{}
    const hoverEvents = context.mode !== 'vertical'?{
        onMouseEnter:(e:React.MouseEvent)=>{
            handleMouse(e,true)
        },
        onMouseLeave:(e:React.MouseEvent)=>{
            handleMouse(e,false)
        }
    }:{}
    const renderChildren = ()=>{
        const subMenuClasses = classNames('jony-submenu',{
            'menu-opened':menuOpen
        })
        const childrenComponent = React.Children.map(children,(child,i)=>{
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === "MenuItem"){
                return childElement
            }else{
                console.error("object");
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvent}>
                { title }
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu