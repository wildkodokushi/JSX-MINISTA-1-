import './Background.scss'
import clsx from 'clsx'

export default (props) => {
    const { className, direction, behavior, scrollamount, text } = props

    return (
        <>
            <marquee className={clsx('marquee', className)} behavior={behavior} direction={direction} scrollamount={scrollamount}>
                {text}
            </marquee>
        </>
    )
}