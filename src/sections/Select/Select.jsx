import './Select.scss'
import Background from '@/components/Background'

export default () => {
    return (
        <>
            <div className="select">
                <div className="select__container container">
                    <h5 className="select__container-subtitle h5">select project</h5>
                    <h2 className="select__container-title h2">
                        browse popular houses based on their features.
                    </h2>
                </div>
                <Background className="select__background" direction="left" text="select"></Background>  
            </div>
        </>
    )
}