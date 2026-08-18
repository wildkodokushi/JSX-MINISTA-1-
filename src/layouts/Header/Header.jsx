import './Header.scss'
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import clsx from "clsx"

export default (props) => {
    const navLink = [
        { href: '#explore', label: 'explore'},
        { href: '#about', label: 'about us'},
        { href: '#howItWorks', label: 'how it works'},
        { href: '#community', label: 'community'}
    ]

    return (
        <>
            <header className="header">
                <div className="header__inner container">
                    <Logo className="header__logo" loading="lazy"/>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            { navLink.map(({ href, label}, index) => (
                                <li key={ index } className="header__menu-item">
                                    <a href={ href } className="header__menu-link">
                                        { label }
                                    </a>
                                </li>
                            )) }
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Button className="header__button button">
                            <span>sign up</span>
                        </Button>
                        <Button className="header__button button">
                            <span>login</span>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}