import './Services.scss'
import { Image } from 'minista'
import Button from '@/components/Button'
import Background from '@/components/Background'

export default () => {
    const descriptionCard = 'Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus.'

    const servicesCard = [
        { number: '01', title: 'browse', description: descriptionCard, link: 'browse all', src: 'src/assets/images/services/browse.png' },
        { number: '02', title: 'learn', description: descriptionCard, link: 'learn more ', src: 'src/assets/images/services/learn.png' },
        { number: '03', title: 'estimate', description: descriptionCard, link: 'get an estimate', src: 'src/assets/images/services/estimate.png' },
    ]

    return (
        <>
            <section className="services">
                <div className="services__container container">
                    <div className="services__titles">
                        <h5 className="services__subtitle h5">what is llokotre?</h5>
                        <h2 className="services__title h2">
                            Tempus malesuada massa tempus sagittis, Faucibus dui
                        </h2>
                    </div>
                    <ul className="services__list">
                        {servicesCard.map(({ number, title, description, link, src }, index) => (
                            <li key={ index } className="services__card">
                                <div className="services__card-text">
                                    <h5 className="services__card-number h5">{number}</h5>
                                    <h3 className="services__card-title h3">{title}</h3>
                                    <p className="services__card-description">{description}</p>
                                    <Button className='services__card-link'>
                                        <span className='h5'>{link}</span>
                                    </Button>
                                </div>
                                <Image className='services__card-image' src={src}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <Background className="services__background" text="about" direction="left"/>
            </section>
        </>
    )
}