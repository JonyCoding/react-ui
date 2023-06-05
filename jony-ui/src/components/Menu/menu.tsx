import React, { createContext,useState } from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'

type menuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: string) => void
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: menuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack
}

interface ImenuContext { 
    index:string;
    onSelect?:SelectCallBack;
    mode?:menuMode
}

export const MenuContext = createContext<ImenuContext>({index:"0"})

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex,onSelect } = props
    const [currentActive,setActive] = useState(defaultIndex)
    const classes = classNames('jony-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index:string)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext:ImenuContext = {
        index: currentActive?currentActive:"0",
        onSelect:handleClick,
        mode:mode,
    }
    // 循环遍历child
    const renderChildren = () => {
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            console.log("object",displayName);
            if(displayName === 'MenuItem' || displayName === 'SubMenu'){
                return React.cloneElement(childElement,{index:index.toString()})
            }else{
                console.error('Is not child compontent')
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: "0",
    mode: 'horizontal',
}

export default Menu