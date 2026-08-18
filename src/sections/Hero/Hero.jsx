import Button from "@/components/Button"
import './Hero.scss'
import { Image } from "minista"

export default () => {
    const stats = [
        { value: '20%', label: 'trusted by companies' },
        { value: '13K', label: 'projects completed' }
    ]

    const marqueeText = ['a vision for liveable and affordable homes.']
    const repeatCount = 4

    return (
        <>
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__content">
                        <Image className="hero__image" src="/src/assets/images/hero/image__house.png"/>
                        <div className="hero__tagline">
                            <h4 className="hero__tagline-subtitle h4">
                                it’s your life. <br /> take the keys.
                            </h4>
                            <h1 className="hero__tagline-title h1">
                                a vision for liveable and affordable homes.
                            </h1>
                        </div>
                        <div className="hero__actions">
                            <Button className="hero__cta button">
                                <span className="h5">get started</span>
                            </Button>
                            <div className="hero__stats">
                                <ul className="hero__stats-list">
                                    {stats.map(({ value, label }, index) => (
                                        <li key={ index } className="hero__stats-item">
                                            <div className="hero__stats-value h2">{ value }</div>
                                            <div className="hero__stats-label h5">{ label }</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hero__media">
                        <Image className="hero__media-image" src="/src/assets/images/hero/image__build.png"/>
                        <p className="hero__caption">
                            <span>Donec cras </span>lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis nunc urna. Feugiat neque, non, mi erat
                        </p>
                        <Button className="hero__play button"/>
                    </div>
                </div>
                <div className="hero__marquee">
                    <marquee behavior="scroll" direction="left" scrollamount="20">
                        <ul className="hero__marquee-list">
                            {Array.from({ length:repeatCount }, (_, i) => (
                                <li key={i} className="hero__marquee-item h5">
                                    { marqueeText[0] }
                                </li>
                            ))}
                        </ul>
                    </marquee>
                </div>
            </section>
        </>
    )
}