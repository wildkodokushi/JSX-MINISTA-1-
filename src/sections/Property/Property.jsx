import './Property.scss'
import Button from '@/components/Button'
import Background from '@/components/Background'
import Slider from '@/components/Slider'
import { Image } from 'minista'

export default () => {
    const propertyCard = [
        { src: 'src/assets/images/property/loft__house.png', title: 'loft house', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/alex.png', personName: 'alex', link: 'contact' },
        { src: 'src/assets/images/property/mighty__quatre.png', title: 'mighty quatre', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/james.png', personName: 'james', link: 'contact' },
        { src: 'src/assets/images/property/loft__house.png', title: 'loft house', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/alex.png', personName: 'alex', link: 'contact' },
        { src: 'src/assets/images/property/mighty__quatre.png', title: 'mighty quatre', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/james.png', personName: 'james', link: 'contact' },
        { src: 'src/assets/images/property/loft__house.png', title: 'loft house', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/alex.png', personName: 'alex', link: 'contact' },
        { src: 'src/assets/images/property/mighty__quatre.png', title: 'mighty quatre', meta: 'san marcos, 2019', personAvatar: 'src/assets/images/property/persons/james.png', personName: 'james', link: 'contact' },
    ]

    return (
        <>
            <section className="property">
                <Background direction="right" text="homes" />
                <div className="property__container container">
                    <div className="property__titles">
                        <h5 className="property__subtitle h5">primary homes</h5>
                        <h2 className="property__title h2">
                            Sed nisi, sit ornare in faucibus sit id cursus urna. vitae mi
                        </h2>
                    </div>
                    <div className="property__slider">
                        <Slider>
                            {propertyCard.map(({src, title, meta, personAvatar, personName, link}, index) => (
                                <div key={ index } className="property__slider-wrapper">
                                    <Image className="property__slider-image" src={src} />
                                    <div className="property__slider-meta">
                                        <h3 className="property__slider-title h3">{title}</h3>
                                        <span className="property__slider-data">{meta}</span>
                                    </div>
                                    <div className="property__slider-cta property__cta">
                                        <div className="property__slider-person property__person">
                                            <Image className="property__person-avatar" src={personAvatar} />
                                            <span className="property__person-name">{personName}</span>
                                        </div>
                                        <Button className="property__cta-button">
                                            <span>{link}</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}