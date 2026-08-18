import './Background.scss'
import clsx from 'clsx'

export default (props) => {
    const { className, direction, text } = props

    return (
        <>
            <marquee className={clsx('marquee', className)} aria-hidden="true" behavior="scroll" direction={direction} scrollamount="20">
                {text}
            </marquee>
        </>
    )
}