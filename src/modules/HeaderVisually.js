const headerElement = document.querySelector('.header')
const headerButtonElements = document.querySelectorAll('.header__button')

const scrollLimit = 200

export default function headerScrollTop() {
    window.addEventListener('scroll', () => {
        if(window.scrollY >= scrollLimit) {
            headerButtonElements.forEach(element => {
                element.classList.add('scroll')
            })

            if(headerElement) headerElement.classList.add('scroll')
        } else {
            headerButtonElements.forEach(element => {
                element.classList.remove('scroll')
            })

            if(headerElement) headerElement.classList.remove('scroll')
        }
    })
}