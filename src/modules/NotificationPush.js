const trustCtaElement = document.querySelector('.trust__cta')

const toastAllowElement = document.getElementById('status-allow')
const toastDisallowElement = document.getElementById('status-disallow')

const allowButton = document.querySelector('.allow')
const disallowButton = document.querySelector('.disallow')

if(localStorage.getItem('hideTrustCta') === 'true') {
    trustCtaElement.classList.add('visually-hidden')
}

export default function clickHandler() {
    disallowButton.addEventListener('click', () => {
        const notification = 'DISALLOW'
        const notificationElement = toastDisallowElement.querySelector('.notification')

        toastDisallowElement.classList.remove('is-open')
        toastDisallowElement.classList.add('is-open')

        notificationElement.textContent = notification
        trustCtaElement.classList.add('visually-hidden')

        setTimeout(() => {
            toastDisallowElement.classList.remove('is-open')
        }, 3000)

        localStorage.setItem('isAllow', false)
        localStorage.setItem('hideTrustCta', true)
    })

    allowButton.addEventListener('click', () => {
        const notificationElement = toastAllowElement.querySelector('.notification')
        
        toastAllowElement.classList.remove('is-open')
        toastAllowElement.classList.add('is-open')

        notificationElement.textContent = 'ALLOW'
        trustCtaElement.classList.add('visually-hidden')

        setTimeout(() => {
            toastAllowElement.classList.remove('is-open')
        }, 3000)

        localStorage.setItem('isAllow', true)
        localStorage.setItem('hideTrustCta', true)
    })
}