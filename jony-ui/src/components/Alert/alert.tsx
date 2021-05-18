import React, { Children } from "react"
import classNames from 'classnames'

export enum AlertType {
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
interface AlertProps {
    type: string,
    closable?: boolean,
    closeText?: string,
    afterClose?: Function,
    className?: string,
}

const Alert: React.FC<AlertProps> = (props) => {
    const {
        type,
        closable,
        closeText,
        afterClose,
        children,
        className,
    } = props
    const classnames = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-${closable}`]: closable
    })
    let isClose = false
    const close = function () {
        isClose = true
        afterClose && afterClose()
    }
    if (isClose) {
        return (
            <p></p>
        )
    } else {
        return (
            <div className={classnames}>
                <span onClick={close}>{closeText ? '关闭' : ''}</span>
                <div className="context">
                    {children}
                </div>
            </div>
        )
    }

}
Alert.defaultProps = {
    type:AlertType.Success
}
export default Alert