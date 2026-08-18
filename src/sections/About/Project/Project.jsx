import './Project.scss'
import { Image } from 'minista'
import Background from '@/components/Background'

export default () => {
    return (
        <>
            <div className="project">
                <div className="project__image">
                    <Image className='project__image-img' src='src/assets/images/about/compact-classic-summer-house.png'/>
                    <div className="project__icon"></div>
                </div>
                <div className="project__container">
                    <h2 className="project__title h2">compact classic summer house.</h2>
                    <p className="project__description">
                        Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis nunc urna. Feugiat neque, non, mi erat
                    </p>
                </div>
                <Background className="project__background" text="select" direction="right"/>
            </div>
        </>
    )
}