import React from 'react'
import classNames from 'classnames'
export enum ButtonSize {
    large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

// html内置的
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
interface BaseButtonProps {
    clasName?: string,
    disable?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disable,
        size,
        children,
        href,
        ...restProps
    } = props
    // btn,btn-lg,btn-primary
    const classes = classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disable
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} {...restProps} href={href}>{children}</a>
        )
    } else {
        return (
            <button className={classes}  {...restProps}  disabled={disable}>{children}</button>
        )
    }
}
Button.defaultProps = {
    disable: false,
    btnType: ButtonType.Default
}
export default Button