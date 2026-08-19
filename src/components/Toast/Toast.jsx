import './Toast.scss'
import clsx from 'clsx'

export default (props) => {
    const { notification, status, id } = props

    return (
        <>
            <div className="toast" id={id}>
                <div className="toast__container">
                    <div className={clsx("toast__container-notification", status)}>
                        <span className="notification">
                            {notification}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}