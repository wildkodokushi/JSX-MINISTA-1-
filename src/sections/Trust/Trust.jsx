import './Trust.scss'
import Icon from '@/components/Icon'
import { Image } from 'minista'
import Button from '@/components/Button'

export default () => {
    const brandIcon = [
        { src: '/src/assets/icons/google.svg' },
        { src: '/src/assets/icons/slack.svg' },
        { src: '/src/assets/icons/riotinto.svg' },
        { src: '/src/assets/icons/heroku.svg' },
    ]

    return (
        <>
            <div className="trust">
                <div className="trust-bar container">
                    <div className="trust-bar__brands trust__brands">
                        <ul className="trust__brands-list">
                            {brandIcon.map(({ src }, index) => (
                                <li key={ index } className='trust__brands-item'>
                                    <Image src={src} className='trust__brands-image'/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="trust-bar__cta trust__cta">
                        <p className="trust__cta-description">
                            lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies
                        </p>
                        <div className="trust__cta-actions">
                            <Button className="trust__cta-button button">
                                <span>decline</span>
                            </Button>
                            <Button className="trust__cta-button button">
                                <span>allow</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}