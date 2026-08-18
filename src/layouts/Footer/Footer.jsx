import './Footer.scss'
import Button from '@/components/Button'

export default () => {
    const navLink = [
        { href: '#explore', label: 'explore'},
        { href: '#about', label: 'about us'},
        { href: '#howItWorks', label: 'how it works'},
        { href: '#community', label: 'community'}
    ]

    return (
        <>
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__action">
                        <h2 className="footer__title h2">
                            it’s your life. <br />
                            <span className='h5'>2020 lobro </span>
                            take the keys.
                        </h2>
                        <form className="footer__form">
                            <fieldset className="footer__field">
                                <input 
                                    type="email" 
                                    className="footer__field-input" 
                                    placeholder='Email...'
                                    autoComplete='off'
                                />
                                <Button className="footer__field-button" type="submit">
                                    <span>get started</span>
                                </Button>
                            </fieldset>
                        </form>
                    </div>
                    <hr />
                    <nav className="footer__menu">
                        <ul className="footer__menu-list">
                            {navLink.map(({href, label}, index) => (
                                <li key={ index } className="footer__menu-item">
                                    <a href={href} className="footer__menu-link">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}