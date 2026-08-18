import './Toast.scss'
import clsx from 'clsx'

export default (props) => {
    const { notification, status, id } = props
    const stateClasses = {
        disallow: 'disallow',
        allow: 'allow',
    }

    status === 'disallow' ? stateClasses.disallow : stateClasses.allow

    return (
        <>
            <div className="toast">
                <div className="toast__container">
                    <div className={clsx("toast__container-notification", status)} id={id}>
                        {notification}
                    </div>
                </div>
            </div>
        </>
    )
}