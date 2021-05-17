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

interface BaseButtonProps {
    clasName?: string,
    disable?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disable,
        size,
        children,
        href
    } = props
    // btn,btn-lg,btn-primary
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disable
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href}>{children}</a>
        )
    } else {
        return (
            <button className={classes} disabled={disable}>{children}</button>
        )
    }
}
Button.defaultProps = {
    disable: false,
    btnType: ButtonType.Default
}
export default Button