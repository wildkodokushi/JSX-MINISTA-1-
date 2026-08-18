import './Testimonial.scss'
import Background from '@/components/Background'

export default () => {
    const quoteElement = 'Id viverra ultricies nascetur sed in. Magna sed ultricies risus nunc  vulputate sit. Et massa egestas amet neque quam.'
    const authorInfo = [
        { author: 'jonathan sawab', company: 'the yamen group', quote: quoteElement }
    ]

    return (
        <>
            <section className="testimonial">
                <div className="testimonial__container container">
                    {authorInfo.map(({author, company, quote}, index) => (
                        <div className="testimonial__rewie">
                            <div className="testimonial__rewie-info">
                                <h5 className="testimonial__title h5">tsetimonials</h5>
                                <div className="testimonial__author">
                                    <span className="testimonial__author-name">{author}</span>
                                    <span className="testimonial__author-company">{company}</span>
                                </div>
                            </div>
                            <h3 className="testimonial__quote h3">
                                <span>“</span>
                                {quote}
                                <span>”</span>
                            </h3>
                        </div>
                    ))}
                </div>
                <Background className="testimonial__background" direction="left" text="testimonials"/>
            </section>
        </>
    )
}